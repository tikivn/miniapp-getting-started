import { $page } from '@tiki.vn/redux-miniprogram-bindings';

import { queryToObj } from '../../helper';
import { constants as c } from '../../constants';
import { getOrderById } from '../../store/actions/order';

$page({
  mapState: [
    (state) => ({
      info: state.order.info,
    }),
  ],
  mapDispatch: { getOrderById },
})({
  data: {
    status: c.LOADING,
    isShowModal: false,
    statusTitle: {
      [c.DELIVERING]: 'Delivering',
      [c.PREPARING]: 'Preparing',
      [c.DELIVERED]: 'Delivered',
      [c.FAIL]: 'Delivery failed',
      [c.COMPLETED]: 'Order completed',
      [c.RECEIVED]: 'Order received',
      [c.READY]: 'Ready for pickup',
    },
    bgList: {
      [c.DELIVERY]: {
        [c.DELIVERING]: '/assets/bg_delivery_progress.png',
        [c.PREPARING]: '/assets/bg_delivery_prepare.png',
        [c.DELIVERED]: '/assets/bg_delivery_success.png',
        [c.FAIL]: '/assets/bg_delivery_fail.png',
      },
      [c.STORE_PICKUP]: {
        [c.COMPLETED]: '/assets/bg_store_pickup_completed.png',
        [c.RECEIVED]: '/assets/bg_store_pickup_received.png',
        [c.READY]: '/assets/bg_store_pickup_ready.png',
      },
    },
  },
  async onLoad(query) {
    const orderId = queryToObj(query).id;
    my.setNavigationBar({ title: `Order ${orderId}` });
    await this.getOrderById(orderId);
    this.setData({
      status: c.SUCCESS,
    });
  },
  onShowModal() {
    this.setData({
      isShowModal: true,
    });
  },
  onHideModal() {
    this.setData({
      isShowModal: false,
    });
  },
});
