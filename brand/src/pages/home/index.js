import { getProductsAPI } from '../../services/index';
import DisposableCollection from '../../utils/disposable';
import { updateFilters } from '../../utils/filter';
import {
  goToProductDetail,
  navigate,
  openDeeplink,
  showCart,
} from '../../utils/navigate';
import { group } from '../../utils/common';

const app = getApp();

Page({
  disposable: new DisposableCollection(),

  data: {
    scrolledHeader: false,
    isLoading: true,
    bestSellerProducts: {
      data: [],
    },
    popularProducts: {
      data: [],
    },
    newestProducts: {
      data: [],
    },
    categories: [],
    brandLogo: '',
    brandCover: '',
  },

  async loadData() {
    this.setData({
      isLoading: true,
    });

    try {
      const [bestSellerProducts, popularProducts, newestProducts] =
        await Promise.all([
          getProductsAPI({ page: 1, limit: 3, sort: 'top_seller' }),
          getProductsAPI({ page: 1, limit: 4, sort: 'default' }),
          getProductsAPI({ page: 1, limit: 4, sort: 'newest' }),
        ]);

      updateFilters(bestSellerProducts.filters);

      this.setData({
        bestSellerProducts,
        popularProducts,
        newestProducts,
        categories: group(bestSellerProducts.filters[0].values, 4),
        isLoading: false,
      });
    } catch {
      this.setData({
        isLoading: false,
      });
    }
  },

  goToProductPage(params) {
    navigate({
      page: 'product',
      params: {
        ...params,
        showActions: false,
      },
    });
  },

  goToCategoryDetail(category) {
    navigate({
      page: 'product',
      params: {
        title: category.display_value,
        category: category.query_value,
        showCategory: false,
      },
    });
  },

  onTapProduct(product) {
    goToProductDetail({ product, page: 'home' });
  },

  onCustomIconEvent() {
    openDeeplink('tikivn://cart');
  },

  // Life cycle
  onLoad() {
    showCart();
  },

  async onPullDownRefresh() {
    await this.loadData();
    my.stopPullDownRefresh();
  },

  onPageScroll(event) {
    if (this.data.scrolledHeader && event.scrollTop <= 30)
      this.setData({ scrolledHeader: false });
    if (!this.data.scrolledHeader && event.scrollTop > 30)
      this.setData({ scrolledHeader: true });
  },

  onReady() {
    this.loadData();

    this.setData({
      brandLogo: app.brandLogo,
      brandCover: app.brandCover,
    });
  },

  onUnload() {
    this.disposable.dispose();
  },
});
