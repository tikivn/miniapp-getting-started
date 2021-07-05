import { post } from "../../services/api";
import { getQuotes } from "../../services/shipping";
import {
  getAddress,
  getRecentAddress,
  setRecentAddress,
} from "../../utils/storage";

const app = getApp();

const API_URL = "https://miniapp-demo.tala.xyz";

Page({
  data: {
    cart: app.cart,
    address: null,
    listAddress: [],
    quotes: [],
    quote: null,
    total: 0,
    showFooter: true,
    loading: false,
  },
  hasAuthListener: null,
  async initAddressAndQuote() {
    if (app.auth) {
      await this.initAddress();
      this.getListQuotes();
    }
  },
  onLoad() {
    app.addressEvent.on("address/update", () => this.initAddressAndQuote());
    if (!app.auth) {
      app.authEvent.on("auth/success", async () => this.initAddressAndQuote());
      this.hasAuthListener = true;
    }
  },
  onUnload() {
    app.addressEvent.removeListener("address/update");
    this.hasAuthListener && app.addressEvent.removeListener("auth/success");
  },
  async onShow() {
    this.setData({ cart: app.cart });
    this.initAddressAndQuote();
  },
  async initAddress() {
    const [address, listAddress] = await Promise.all([
      getRecentAddress(),
      getAddress(),
    ]);
    this.setData({ address, listAddress });
  },
  async getListQuotes() {
    const { address, quote, cart } = this.data;
    if (address && cart.products.length) {
      const rs = await getQuotes(address, cart.products);
      const quotes = (rs && rs.quotes) || [];
      if (
        !quote ||
        !quotes.some(
          (q) =>
            q.service.code === quote.service.code &&
            q.partner_code == quote.partner_code
        )
      ) {
        const sorted = quotes.sort((a, b) => a.fee.amount - b.fee.amount);
        this.setData({ quotes, quote: sorted[0] });
      } else {
        this.setData({ quotes });
      }
    }
  },
  onChangeAddress(address) {
    this.setData({ address }, () => this.getListQuotes());
    setRecentAddress(address);
  },
  onChangeQuote(quote) {
    const { cart } = this.data;
    const total = cart.totalPrice + ((quote && quote.fee.amount) || 0);
    this.setData({ quote, total });
  },
  onChangeCart(cart) {
    const total =
      cart.totalPrice + ((this.data.quote && this.data.quote.fee.amount) || 0);
    this.setData({ cart, total });
    app.cart = cart;
    my.setTabBarBadge({
      index: 1,
      text: `${cart.products.length}`,
    });
  },
  onChangeQuantity(product, value) {
    const products = this.data.cart.products.map((i) =>
      i.id === product.id ? { ...i, total: value } : i
    );
    const totalPrice = products.reduce(
      (sum, product) => (sum += product.price * product.total),
      0
    );
    const cart = { ...this.data.cart, totalPrice, products };
    this.onChangeCart(cart);
  },
  onDeleteProduct(product) {
    const products = this.data.cart.products.filter((i) => i.id !== product.id);
    const totalPrice = products.reduce(
      (sum, product) => (sum += product.price * product.total),
      0
    );
    const cart = { ...this.data.cart, totalPrice, products };
    this.onChangeCart(cart);
  },
  onShowBottomSheet() {
    this.setData({ showFooter: false });
  },
  onHideBottomSheet() {
    this.setData({ showFooter: true });
  },
  clearCart() {
    this.setData({ cart: app.initCart() });
    app.cart = app.initCart();
    my.removeTabBarBadge({
      index: 1,
    });
  },
  async doPayment() {
    this.setData({ loading: true });
    const { address, total, cart, quote } = this.data;

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
        sub_total: cart.totalPrice,
        total,
      },
    };
    const res = await post(`${API_URL}/orders`, {
      token: app.auth.authToken,
      data: requestData,
    });

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
          this.setData({ loading: false });
        },
        success: () => {
          console.log("success");
          my.alert({
            title: "Thanh toán thành công",
            content:
              "Bạn có thể kiểm tra tình trạng đơn hàng trong tab Tài khoản",
            complete: () => {
              this.clearCart();
            },
          });
          this.setData({ loading: false });
        },
      });
    } catch (error) {
      console.log("order error", error);
      this.setData({ loading: false });

      my.alert({
        title: "Thanh toán thất bại",
        content: `Vui lòng thử lại`,
        buttonText: `Thử lại`,
      });
    }
  },
});
