import { getUserInfo, getNumOrders } from '../../services/index';

Page({
  data: {
    isLoading: false,
    user: {},
    numOrders: {},
  },

  async loadData() {
    this.setData({
      isLoading: true,
    });

    try {
      const [user, numOrders] = await Promise.all([
        getUserInfo(),
        getNumOrders(),
      ]);

      this.setData({
        user,
        numOrders,
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
