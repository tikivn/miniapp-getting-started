import {
  getShopInfoAPI,
  getCategoriesAPI,
  getFeaturedProductsAPI,
  getNewProductsAPI,
} from '../../services/index';
import { group } from '../../utils/common';

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
      const [categories] = await Promise.all([
        getCategoriesAPI(),
      ]);

      this.setData({
        categories: group(categories, 4),
        isLoading: false,
      });
    } catch (error) {
      this.setData({
        isLoading: false,
      });
    }
  },

  // Life cycle
  async onReady() {
    await this.loadData();
  },

  async onPullDownRefresh() {
    await this.loadData();
    my.stopPullDownRefresh();
  },
});
