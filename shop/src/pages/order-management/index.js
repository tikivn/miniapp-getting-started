import { getOrders } from '../../services/index';
import queryString from 'query-string';

Page({
  data: {
    isLoading: false,
    activeTab: 1,
    orderTabs: [
      { title: 'All' },
      { title: 'Wait for payment' },
      { title: 'Processing' },
      { title: 'Shipping' },
    ],
    orders: [],
  },
  onTabClick({ index, tabsName }) {
    this.loadData();
    this.setData({
      [tabsName]: index,
    });
  },
  onChangeTab({ index, tabsName }) {
    this.loadData();
    this.setData({
      [tabsName]: index,
    });
  },

  onMoveOrderDetail() {
    my.navigateTo({ url: 'pages/order-detail/index' });
  },

  async loadData() {
    this.setData({
      isLoading: true,
    });

    try {
      const orders = await getOrders();

      this.setData({
        orders,
        isLoading: false,
      });
    } catch (error) {
      this.setData({
        isLoading: false,
      });
    }
  },

  onLoad(query) {
    const { tab } = queryString.parse(query);
    this.setData({
      activeTab: parseInt(tab) + 1,
    });
  },
  // Life cycle
  onReady() {
    this.loadData();
  },
});
