import { get } from "../../services/api";

const app = getApp();

const API_URL = "https://miniapp-demo.tala.xyz";

Page({
  data: {},
  hasAuthListener: null,
  async onLoad() {
    if (app.auth) {
      this.getOrders();
    } else {
      app.authEvent.on("auth/success", this.getOrders);
      this.hasAuthListener = true;
    }
  },
  onUnload() {
    if (this.hasAuthListener) {
      app.authEvent.removeListener("auth/success");
    }
  },
  async getOrders() {
    const res = await get(`${API_URL}/orders`, {
      token: app.auth.authToken,
    });
    console.log("res :>> ", res);
  },
  onViewDetail(e) {
    app.detailOrderID = e.target.dataset.id;

    my.navigateTo({
      url: `pages/order-detail/index?order_id=${e.target.dataset.id}`,
    });
  },
});
