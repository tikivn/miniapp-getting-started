import { getMyPoint } from '../../services/index';

Page({
  data: {
    isLoading: true,
    myPoint: {}
  },

  async loadData() {
    this.setData({
      isLoading: true,
    });

    try {
      const myPoint = await getMyPoint();

      this.setData({
        myPoint,
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
