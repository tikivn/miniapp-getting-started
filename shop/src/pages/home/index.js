import {
  getShopInfoAPI,
  getCategoriesAPI,
  getFeaturedProductsAPI,
  getNewProductsAPI,
  getBannersAPI,
  getHotDealProductsAPI,
} from '../../services/index';
import { group } from '../../utils/common';
import { navigateToPDP, loadBadgeCart } from '../../utils/navigate';

Page({
  data: {
    isLoading: true,
    shop: {},
    categories: [],
    featuredProducts: [],
    newProducts: [],
    banners: [],
    hotDealProducts: [],
  },

  onTapProduct(product) {
    navigateToPDP(product.id);
  },

  onCustomIconEvent(e) {
    my.navigateTo({ url: 'pages/cart/index' });
  },

  async loadData() {
    this.setData({
      isLoading: true,
    });

    try {
      const [
        shop,
        categories,
        featuredProducts,
        newProducts,
        banners,
        hotDealProducts,
      ] = await Promise.all([
        getShopInfoAPI(),
        getCategoriesAPI(),
        getFeaturedProductsAPI(),
        getNewProductsAPI(),
        getBannersAPI(),
        getHotDealProductsAPI(),
      ]);

      this.setData({
        shop,
        featuredProducts,
        newProducts,
        banners,
        hotDealProducts,
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

  onShow() {
    loadBadgeCart();
  },

  async onPullDownRefresh() {
    await this.loadData();
    my.stopPullDownRefresh();
  },
});
