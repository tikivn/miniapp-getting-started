import { $page } from '@tiki.vn/redux-miniprogram-bindings';

import { getAllOrders } from '../../store/actions/order';
import { constants as c } from '../../constants';
import { navigateTo, queryToObj } from '../../helper';

import { initData } from './helper';

$page({
  mapState: [
    (state) => ({
      list: state.order.list,
    }),
  ],
  mapDispatch: { getAllOrders },
})({
  data: {
    currentTab: c.STORE_PICKUP,
    status: c.LOADING,
  },
  async onLoad(query) {
    const { finishedOnly } = queryToObj(query);

    my.setNavigationBar({
      title: !finishedOnly ? 'Order management' : 'Order history',
    });
    my.addIconsToNavigationBar({
      icons: [
        {
          image: '/assets/history.png',
          width: 24,
          height: 24,
        },
      ],
    });

    if (this.data.list.status === c.LOADING) {
      await this.getAllOrders();
    }

    const orders = initData(this.data.list.data, finishedOnly);

    this.setData({ status: c.SUCCESS, orders });
  },
  onCustomIconEvent() {
    navigateTo('orders-list', { finishedOnly: true });
  },
  onStorePickupClick() {
    this.setData({ currentTab: 'STORE_PICKUP' });
  },
  onDeliveryClick() {
    this.setData({ currentTab: 'DELIVERY' });
  },
  onMoveToProductList() {
    navigateTo('delivery', { method: this.data.currentTab });
  },
});
