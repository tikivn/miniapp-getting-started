import { getOrderDetail } from '../../services/index';

Page({
  data: {
    isLoading: true,
    order: {},
  },

  async loadData() {
    this.setData({
      isLoading: true,
    });

    try {
      const order = await getOrderDetail();

      this.setData({
        order,
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
