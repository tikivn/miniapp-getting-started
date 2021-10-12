import { getCategoriesAPI, getSubCategoriesAPI } from '../../services/index';
import { loadBadgeCart } from '../../utils/navigate';

Page({
  data: {
    isLoading: true,
    isSubCategoriesLoading: true,
    categories: [],
    activatedCategory: {},
    subCategories: [],
  },

  async loadSubCategories() {
    try {
      this.setData({
        isSubCategoriesLoading: true,
      });

      const subCategories = await getSubCategoriesAPI(
        this.data.activatedCategory.id
      );

      this.setData({
        subCategories,
        isSubCategoriesLoading: false,
      });
    } catch {
      this.setData({
        isSubCategoriesLoading: false,
      });
    }
  },

  async loadData() {
    this.setData({
      isLoading: true,
    });

    try {
      const categories = await getCategoriesAPI();

      this.setData({
        categories,
        activatedCategory: categories[0],
        isLoading: false,
      });

      this.loadSubCategories();
    } catch {
      this.setData({
        isLoading: false,
      });
    }
  },

  activeCategory(activatedCategory) {
    this.setData({
      activatedCategory,
    });

    this.loadSubCategories();
  },

  onCustomIconEvent(e) {
    my.navigateTo({ url: 'pages/cart/index' });
  },

  onTapCategoryTitle(categoryName) {
    my.navigateTo({
      url: `pages/category-detail/index?category_name=${categoryName}`,
    });
  },

  goToCategoryDetail(category) {
    my.navigateTo({
      url: `pages/category-detail/index?category_name=${category.name}`,
    });
  },

  // Life cycle
  onShow() {
    loadBadgeCart();
  },

  onReady() {
    this.loadData();
  },
});