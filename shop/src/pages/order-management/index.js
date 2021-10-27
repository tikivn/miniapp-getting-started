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
    this.setData({
      [tabsName]: index,
    });
    this.loadData();
  },
  onChangeTab({ index, tabsName }) {
    if (!this.data.isLoading) {
      this.setData({
        [tabsName]: index,
      });
      this.loadData();
    }
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
