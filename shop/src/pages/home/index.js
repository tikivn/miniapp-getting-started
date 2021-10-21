import {
  getShopInfoAPI,
  getCategoriesAPI,
  getFeaturedProductsAPI,
  getNewProductsAPI,
  getBannersAPI,
  getHotDealProductsAPI,
} from '../../services/index';
import { group } from '../../utils/common';
import {
  navigateToPDP,
  loadBadgeCart,
  navigateWithParams,
} from '../../utils/navigate';
import { getStorage, setStorage } from '../../utils/storage';

Page({
  data: {
    initHome: false,
    isLoading: true,
    isFirstOpen: false,
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

  goToCategory() {
    my.switchTab({
      url: 'pages/category/index',
    });
  },

  goToCategoryDetail(category) {
    navigateWithParams({
      page: 'category-detail',
      params: { category_name: category.name },
    });
  },

  setTitle() {
    my.setNavigationBar({
      title: 'Shop Name',
    });
  },

  async onDone() {
    my.showTabBar({
      animation: true,
    });
    this.setTitle();
    loadBadgeCart();
    this.setData({
      isFirstOpen: false,
    });
    this.loadData();
    await setStorage('first-open', false);
  },

  // Life cycle
  async onReady() {
    const value = await getStorage('first-open');
    const isFirstOpen = value === undefined ? true : value;
    if (isFirstOpen) {
      my.hideTabBar({
        animation: true,
      });
    } else {
      this.loadData();
      this.setTitle();
    }
    this.setData({
      initHome: true,
      isFirstOpen,
    });
  },

  async onShow() {
    const value = await getStorage('first-open');
    const isFirstOpen = value === undefined ? true : value;
    if (!isFirstOpen) {
      loadBadgeCart();
      this.setTitle();
    }
    this.setData({
      initHome: true,
      isFirstOpen,
    });
  },

  async onPullDownRefresh() {
    await this.loadData();
    my.stopPullDownRefresh();
  },
});
