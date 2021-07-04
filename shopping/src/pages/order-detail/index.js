import query from "query-string";

import { getOrder } from "../../services/order";
import { formatMoney } from "../../utils/number";
import { orderStatusMap, deliveryTagMap } from "../../utils/constants";

const app = getApp();

Page({
  data: {
    order: null,
    orderId: null,
  },
  async onLoad(event) {
    const id = 80;
    // const id = query.parse(event).id;
    this.setData({ orderId: id });
    app.authEvent.on("auth/success", () => this.getOrder(id));
    // this.getOrder(orderId);
  },
  async getOrder(id) {
    const res = await getOrder(id);
    const order = {
      id: res.data.order.tiki_ref_id,
      createdAt: res.data.order.created_at_str,
      status: orderStatusMap[res.data.order.status],
      delivery: deliveryTagMap[res.data.order.service_code],
      updatedAt: res.data.order.updated_at_str,
      name: res.data.order.dest_name,
      phone: res.data.order.dest_phone,
      address: res.data.order.dest_addr,
      products: [
        {
          image: res.data.order.img_url,
          name: res.data.order.name,
          price: formatMoney(res.data.order.price),
          quantity: res.data.order.quantity,
        },
      ],
      shipping: formatMoney(res.data.order.shipping),
      serviceCode: res.data.order.service_code,
      partnerCode: res.data.order.partner_code,
      trackingID: res.data.order.tracking_id,
      subtotal: formatMoney(res.data.order.subtotal),
      shipping: formatMoney(res.data.order.shipping),
      total: formatMoney(res.data.order.total),
    };
    this.setData({ order });
  },
  viewShipping() {
    my.navigateTo({ url: "pages/shipping/index" });
  },
});
