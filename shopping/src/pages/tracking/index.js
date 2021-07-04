import query from "query-string";

import { getTrackings } from "../../services/tracking";
import { orderStatusMap, descMap } from "../../utils/constants";

const app = getApp();

Page({
  data: {
    trackings: [],
    trackingId: null,
  },
  async onLoad(event) {
    const id = query.parse(event).id;
    this.setData({ trackingId: id });
    if (app.auth) {
      this.getTrackings(id);
    } else {
      app.authEvent.on("auth/success", () => this.getTrackings(id));
    }
  },
  async getTrackings(id) {
    const res = await getTrackings(id);
    console.log("rest :>> ", res);
    const data = (res && res.data && res.data.logs) || [];
    const trackings = data.map((item) => ({
      status: orderStatusMap[item.status],
      text1: orderStatusMap[item.status],
      text2: `${item.driver_name || ""} ${item.driver_phone || ""} ${
        descMap[item.status] || ""
      }`,
      text3: item.time,
    }));
    this.setData({ trackings });
  },
});
