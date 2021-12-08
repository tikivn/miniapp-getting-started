import { group } from '../../utils/common';
import {
  navigate,
  switchTab,
  openDeeplink,
  goToProductDetail,
} from '../../utils/navigate';
import {
  getShopInfoAPI,
  getCategoriesAPI,
  getProductsAPI,
  getBannersAPI,
} from '../../services/index';
import DisposableCollection from '../../utils/disposable';
import myx from '../../utils/myx';

const sellerId = getApp().sellerId;

Page({
  disposable: new DisposableCollection(),

  data: {
    isLoading: true,
    isFollowButtonLoading: false,
    shop: {
      name: '',
      logo: '',
    },
    follow: {
      following: {
        total_follower: 0,
      },
      is_followed: false,
    },
    banners: [],
    featuredProducts: {
      data: [],
      page: {
        total: 0,
        cursor: 0,
      },
    },
    newProducts: {
      data: [],
      page: {
        total: 0,
        cursor: 0,
      },
    },
    categories: [],
  },

  async loadData() {
    this.setData({
      isLoading: true,
    });

    try {
      const [shop, follow, categories, featuredProducts, newProducts, banners] =
        await Promise.all([
          getShopInfoAPI({ sellerId }),
          myx.isFollowingSeller({ sellerId }),
          getCategoriesAPI({ sellerId }),
          getProductsAPI({ sellerId, cursor: 0, limit: 4 }),
          getProductsAPI({ sellerId, cursor: 0, limit: 4, sort: 'newest' }),
          getBannersAPI(),
        ]);

      this.setData({
        shop,
        follow,
        featuredProducts,
        newProducts,
        banners,
        categories: group(categories),
        isLoading: false,
      });
    } catch {
      this.setData({
        isLoading: false,
      });
    }
  },

  goToCategoryPage() {
    switchTab({
      page: 'category',
      params: {
        title: 'Danh mục sản phẩm',
      },
    });
  },

  goToProductPage(params) {
    navigate({ page: 'product', params });
  },

  goToSubCategoryPage(category) {
    navigate({
      page: 'category',
      params: {
        categoryId: category.id,
        parentId: category.id,
        title: category.name,
      },
    });
  },

  onTapBanner(banner) {
    openDeeplink(banner.url);
  },

  async followAndUnfollow() {
    const { is_followed } = this.data.follow;

    try {
      this.setData({
        isFollowButtonLoading: true,
      });

      let follow = null;
      if (is_followed)
        follow = await myx.unfollowSeller({ sellerId, openLogin: true });
      else follow = await myx.followSeller({ sellerId, openLogin: true });

      this.setData({
        follow,
        isFollowButtonLoading: false,
      });
    } catch {
      this.setData({
        isFollowButtonLoading: false,
      });
    }
  },

  onTapProduct(product) {
    goToProductDetail({ product, page: 'home' });
  },

  // Life cycle
  async onPullDownRefresh() {
    await this.loadData();
    my.stopPullDownRefresh();
  },

  onReady() {
    this.loadData();
  },

  onUnload() {
    this.disposable.dispose();
  },
});
