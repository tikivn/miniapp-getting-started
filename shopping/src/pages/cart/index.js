import myx from "tiki-miniapp-tnx/src/myx";

import { post } from "../../services/api";

const app = getApp();

const API_URL = "https://miniapp-demo.tala.xyz";
// const API_URl = "https://2dc2b26fd45f.ngrok.io";

Page({
  data: {
    cart: app.cart,
    app: {},
  },
  async prepForPayment() {
    const app = {};
    const auth = await myx.getAuthCode();
    console.log("auth", auth);
    app.authCode = auth.authCode;
    const res = await post(`${API_URL}/token`, {
      data: { auth_code: auth.authCode },
    });

    app.authToken = await res.data.access_token;
    app.tikiAccessToken = await res.data.tiki_access_token;
    app.user = await res.data.user;
    this.setData({ app });
    console.log(app);
  },
  async onLoad() {
    await this.prepForPayment();
  },
  onShow() {
    this.setData({ cart: app.cart });
  },
  async doPayment() {
    const data = {
      order: {
        items: app.cart.products.map((item) => ({
          name: item.name,
          img_url: item.thumbnail_url,
          // description: item.description || "",
          description: "",
          quantity: item.total,
          price: item.price,
          weight: 1,
          height: Math.floor(Math.random() * 100),
          width: Math.floor(Math.random() * 100),
          depth: Math.floor(Math.random() * 100),
        })),
        shipping: 14000,
        shipping_address: {
          name: "Hung Nguyen",
          phone: "0987654321",
          street:
            "Toa nhà Viettel Complex, 285 CMT8, Phường 12, Quận 10, Hồ Chí Minh",
        },
        shipping_info: {
          partner_code: "GRAB",
          service_code: "INSTANT",
        },
        sub_total: 63800,
        total: 77800,
      },
    };
    console.log("data :>> ", data);
    // const res = await post("https://miniapp-demo.tala.xyz/orders", {

    const res = await post(`${API_URL}/orders`, {
      token: this.data.app.authToken,
      data,
    });
    console.log("res", res);

    try {
      my.makePayment({
        orderId: res.data.order.tiki_ref_id,
        fail: (err) => {
          console.log("make payment fail", err);
        },
      });
      // await my.alert({
      //   title: "Thanh toán thành công",
      //   content: `Bạn đã thanh toán ${this.data.order.total} ₫`,
      // });
      // my.navigateTo({
      //   url: "pages/index/index",
      // });
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
