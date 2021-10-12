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
import { getStorage, setStorage } from '../../utils/storage';

Page({
  data: {
    isLoading: true,
    isFirstOpen: true,
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
    my.navigateTo({ url: 'pages/category/index' });
  },

  goToCategoryDetail(category) {
    my.navigateTo({
      url: `pages/category-detail/index?category_name=${category.name}`,
    });
  },

  async onDone() {
    await setStorage('first-open', false);
    my.showTabBar({
      animation: true,
    });
    my.setNavigationBar({
      title: 'Shop Name',
    });
    loadBadgeCart();
    this.setData({
      isFirstOpen: false,
    });
    this.loadData();
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
    }
    this.setData({
      isFirstOpen,
    });
  },

  async onShow() {
    const value = await getStorage('first-open');
    const isFirstOpen = value === undefined ? true : value;
    if (!isFirstOpen) {
      loadBadgeCart();
    }
    this.setData({
      isFirstOpen,
    });
  },

  async onPullDownRefresh() {
    await this.loadData();
    my.stopPullDownRefresh();
  },
});