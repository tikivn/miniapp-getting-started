import { post } from "../../services/api";
import { getQuotes } from "../../services/shipping";
import { getRecentAddress, setRecentAddress } from "../../utils/storage";

const app = getApp();

const API_URL = "https://miniapp-demo.tala.xyz";

Page({
  data: {
    cart: app.cart,
    address: null,
    quotes: [],
    quote: null,
  },
  async onLoad() {
    this.setData({ cart: app.cart });

    // Init address
    await this.initAddress();
    // Init quotes
    this.getListQuotes();
  },
  async initAddress() {
    const recentAddress = await getRecentAddress();
    if (recentAddress) {
      this.setData({ address: recentAddress });
    }
  },
  async getListQuotes() {
    const { address, cart } = this.data;
    if (address && cart.products.length) {
      const rs = await getQuotes(address, cart.products);
      const quotes = (rs && rs.quotes) || [];
      const sorted = quotes.sort((a, b) => a.fee.amount - b.fee.amount);
      this.setData({ quotes, quote: sorted[0] });
    }
  },
  onChangeAddress(address) {
    this.setData({ address }, () => this.getListQuotes());
    setRecentAddress(address);
  },
  onChangeQuote(quote) {
    this.setData({ quote });
  },
  async doPayment() {
    const { address, cart, quote } = this.data;

    const requestData = {
      order: {
        items: cart.products.map((item) => ({
          name: item.name,
          img_url: item.thumbnail_url,
          // description: item.description || "",
          description: item.name,
          quantity: item.total,
          price: item.price,
          weight: 1,
          height: Math.floor(Math.random() * 6) + 1,
          width: Math.floor(Math.random() * 6) + 1,
          depth: Math.floor(Math.random() * 6) + 1,
        })),
        shipping: quote.fee.amount,
        shipping_address: {
          name: address.name,
          phone: address.phone,
          street: [
            address.street || "",
            address.ward.name || "",
            address.district.name || "",
            address.city.name || "",
          ].join(", "),
        },
        shipping_info: {
          partner_code: quote.partner_code,
          service_code: quote.service.quote,
        },
        sub_total: cart.total,
        total: cart.total + quote.fee.amount,
      },
    };
    console.log("requestData :>> ", requestData);
    const res = await post(`${API_URL}/orders`, {
      token: app.auth.authToken,
      data: requestData,
    });
    console.log("res", res);

    try {
      my.makePayment({
        orderId: res.data.order.tiki_ref_id,
        fail: (err) => {
          my.alert({
            title: "Thanh toán thất bại",
            content: `Vui lòng thử lại`,
            buttonText: `Thử lại`,
          });
          console.log("make payment fail", err);
        },
        success: () => {
          console.log("success");
          my.alert({
            title: "Thanh toán thành công",
            content: `Bạn đã thanh toán ${requestData.order.total} ₫`,
          });
        },
      });
    } catch (error) {
      console.log("order error", error);
      my.alert({
        title: "Thanh toán thất bại",
        content: `Vui lòng thử lại`,
        buttonText: `Thử lại`,
      });
    }
  },
});
