import myx from "tiki-miniapp-tnx/src/myx";

import { post, get } from "../../services/api";

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
    app.authCode = auth.authCode;
    const res = await post(`${API_URL}/token`, {
      data: { auth_code: auth.authCode },
    });

    app.authToken = await res.data.access_token;
    app.tikiAccessToken = await res.data.tiki_access_token;
    app.user = await res.data.user;
    this.setData({ app });
  },
  async onLoad() {
    await this.prepForPayment();
    my.showLoading({ content: "Loading..." });

    const res = await get(`https://miniapp-demo.tala.xyz/orders`, {
      token: this.data.app.authToken,
    });
    console.log("res", res);
    this.setData({
      orders: res.data.orders,
      toShow: res.data.orders,
      // statusMap: orderStatusMap,
    });
    my.hideLoading();
  },
  onViewDetail(e) {
    const app = getApp();
    app.detailOrderID = e.target.dataset.id;

    my.navigateTo({
      url: `pages/order-detail/index?order_id=${e.target.dataset.id}`,
    });
  },
});
