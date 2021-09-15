import { getCategoriesAPI } from '../../services/index';

Page({
  data: {
    isLoading: true,
    categories: [],
  },

  async loadData() {
    this.setData({
      isLoading: true,
    });

    try {
      const categories = await getCategoriesAPI();

      this.setData({
        categories,
        isLoading: false,
      });
    } catch {
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
