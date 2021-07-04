import { get } from "../../services/api";
import { orderStatusMap } from "../../utils/constants";
import { formatMoney } from "../../utils/number";

const app = getApp();

const API_URL = "https://miniapp-demo.tala.xyz";

const initTabs = () => [
  {
    title: "Tất cả",
    status: [],
    items: [],
  },
  {
    title: "Đang giao",
    status: ["picking", "delivering"],
    items: [],
  },
  {
    title: "Thất bại",
    status: ["failed_shipment"],
    items: [],
  },
  {
    title: "Hoàn thành",
    status: ["successful_delivery"],
    items: [],
  },
];

Page({
  data: {
    tabIndex: 0,
    tabs: initTabs(),
  },
  hasAuthListener: null,
  async onLoad() {
    if (app.auth) {
      this.getOrders();
    } else {
      app.authEvent.on("auth/success", () => this.getOrders());
      this.hasAuthListener = true;
    }
  },
  onUnload() {
    if (this.hasAuthListener) {
      app.authEvent.removeListener("auth/success");
    }
  },
  onTabClick({ index }) {
    this.setData({
      tabIndex: index,
    });
  },
  async getOrders() {
    const res = await get(`${API_URL}/orders`, {
      token: app.auth.authToken,
    });
    const orders = (res && res.data && res.data.orders) || [];
    const tabs = initTabs();
    orders.forEach((item) => {
      if (item.status) {
        const order = {
          ...item,
          statusMap: orderStatusMap[item.status],
          priceFormat: formatMoney(item.price * item.quantity),
        };
        tabs.forEach((tab) => {
          if (!tab.status.length || tab.status.includes(order.status)) {
            tab.items.push(order);
          }
        });
      }
    });
    console.log("orders :>> ", orders);
    console.log("tabs :>> ", tabs);
    this.setData({ tabs });
  },
  onViewDetail(e) {
    my.navigateTo({
      url: `pages/order-detail/index?order_id=${e.target.dataset.id}`,
    });
  },
});
