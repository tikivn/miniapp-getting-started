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
  getShopFollowersAPI,
} from '../../services/index';
import DisposableCollection from '../../utils/disposable';
import { onAuthSuccess } from '../../utils/auth';
import myx from '../../utils/myx';
import { getAuth } from '../../utils/auth';

const sellerId = getApp().sellerId;

Page({
  disposable: new DisposableCollection(),

  data: {
    isLoading: true,
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
          // TODO: Replace when js api ready
          // myx.isFollowingSeller({ sellerId }),
          getShopFollowersAPI({ sellerId }),
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
      await getAuth({
        isLoginRequired: true,
        fallbackAction: (error) => {
          throw error;
        },
      });
      let follow = null;
      if (is_followed) follow = await myx.unfollowSeller({ sellerId });
      else follow = await myx.followSeller({ sellerId });

      this.setData({
        follow,
      });
    } catch {}
  },

  onTapProduct(product) {
    goToProductDetail({ product, page: 'home' });
  },

  // Life cycle
  onLoad() {
    this.disposable.push([
      onAuthSuccess((auth) => {
        // TODO: Handle follow here
      }),
    ]);
  },

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
