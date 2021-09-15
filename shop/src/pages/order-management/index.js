import { getOrders } from '../../services/index';

Page({
  data: {
    isLoading: false,
    activeTab: 0,
    orderTabs: [
      { title: 'All' },
      { title: 'Wait for payment' },
      { title: 'Processing' },
      { title: 'Shipping' }
    ],
    orders: []
  },
  onTabClick({ index, tabsName }) {
    this.loadData();
    this.setData({
      [tabsName]: index
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

  // Life cycle
  onReady() {
    this.loadData();
  },
});
