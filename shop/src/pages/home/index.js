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
    shop: {},
    categories: [],
    featuredProducts: [],
    newProducts: [],
  },

  async loadData() {
    this.setData({
      isLoading: true,
    });

    try {
      const [shop, categories, featuredProducts, newProducts] =
        await Promise.all([
          getShopInfoAPI(),
          getCategoriesAPI(),
          getFeaturedProductsAPI(),
          getNewProductsAPI(),
        ]);

      this.setData({
        shop,
        featuredProducts,
        newProducts,
        categories: group(categories, 8),
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

  async onPullDownRefresh() {
    await this.loadData();
    my.stopPullDownRefresh();
  },
});
