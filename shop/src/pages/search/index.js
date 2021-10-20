import {
  getCategoriesAPI,
  getProductsByCategoryIdAPI,
  getFiltersAPI,
  getOtherProductsAPI,
  filterSortProductsAPI,
  getSortsAPI,
} from '../../services/index';
import { getStorage, setStorage } from '../../utils/storage';
import {
  navigateToPDP,
  loadBadgeCart,
  navigateWithParams,
} from '../../utils/navigate';

Page({
  data: {
    isLoading: false,
    categories: [],
    otherProducts: [],
    products: [],
    searchTerm: '',
    recentKeys: [],

    isShowFilter: false,
    isShowSort: false,
    filters: {
      prices: [],
      sizes: [],
      types: [],
      colors: [],
    },
    selectedFilters: {
      priceOption: null,
      priceRange: {
        start: null,
        end: null,
      },
      size: null,
      type: null,
      color: null,
    },
    selectedSort: null,
  },

  showFilter() {
    this.setData({
      isShowFilter: true,
    });
  },

  hideFilter() {
    this.setData({
      isShowFilter: false,
    });
  },

  onSelectFilter(selectedFilters) {
    this.setData({
      selectedFilters,
    });
    this.filterSortSearchProducts();
  },

  showSort() {
    this.setData({
      isShowSort: true,
    });
  },

  hideSort() {
    this.setData({
      isShowSort: false,
    });
  },

  onSelectSort(selectedSort) {
    this.setData({
      selectedSort,
    });
    this.filterSortSearchProducts();
  },

  removeFilter(item) {
    const data = { ...this.data };
    data.selectedFilters[item.key] = null;
    this.setData(data);
    this.filterSortSearchProducts();
  },

  async onInput(searchTerm) {
    const recentSearch = await getStorage('recent-search');
    const keys =
      searchTerm === ''
        ? { recentKeys: recentSearch, isLoading: false }
        : { isLoading: true };

    this.setData({
      searchTerm,
      ...keys,
    });
  },

  async onSearch(searchTerm) {
    if (searchTerm) {
      const keysSearch = await getStorage('recent-search');
      let recentKeys = keysSearch ? keysSearch : [];
      if (recentKeys.includes(searchTerm)) {
        recentKeys = recentKeys.filter((k) => k !== searchTerm);
      }
      setStorage('recent-search', [searchTerm, ...recentKeys]);
      this.filterSortSearchProducts();
    }
  },

  async removeKeySearch(event) {
    const { item } = event.target.dataset;
    const recentKeys = await getStorage('recent-search');
    const removedKeys = recentKeys.filter((k) => k !== item);
    setStorage('recent-search', removedKeys);
    this.setData({
      recentKeys: removedKeys,
    });
  },

  onClickKeySearch(event) {
    const { key } = event.target.dataset;
    this.setData({
      searchTerm: key,
      isLoading: true,
    });
  },

  onTapProduct(product) {
    navigateToPDP(product.id);
  },

  async filterSortSearchProducts() {
    this.setData({
      isLoading: true,
    });
    try {
      const products = await filterSortProductsAPI({
        filters: this.data.selectedFilters,
        sort: this.data.selectedSort,
        search: this.data.searchTerm,
      });
      this.setData({
        products,
        isLoading: false,
      });
    } catch {
      this.setData({
        isLoading: false,
      });
    }
  },

  async loadData() {
    this.setData({
      isLoading: true,
    });

    try {
      const [categories, products, otherProducts, filters, sorts] =
        await Promise.all([
          getCategoriesAPI(),
          getProductsByCategoryIdAPI(),
          getOtherProductsAPI(),
          getFiltersAPI(),
          getSortsAPI(),
        ]);
      const recentKeys = await getStorage('recent-search');

      this.setData({
        categories,
        products,
        otherProducts,
        filters,
        sorts,
        selectedSort: sorts[0],
        recentKeys: recentKeys ? recentKeys : [],
        isLoading: false,
      });
    } catch (error) {
      this.setData({
        isLoading: false,
      });
    }
  },

  onCustomIconEvent(e) {
    my.navigateTo({ url: 'pages/cart/index' });
  },

  goToCategoryDetail(category) {
    navigateWithParams({
      page: 'category-detail',
      params: { category_name: category.name },
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
