import {
  getProductsByCategoryIdAPI,
  getFiltersAPI,
  getOtherProductsAPI,
  filterSortProductsAPI,
  getSortsAPI,
} from '../../services/index';
import { navigateToPDP, loadBadgeCart } from '../../utils/navigate';
import queryString from 'query-string';

Page({
  data: {
    isLoading: true,
    products: [],
    otherProducts: [],
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

  onTapProduct(product) {
    navigateToPDP(product.id);
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
    this.filterSortProducts();
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
    this.filterSortProducts();
  },

  removeFilter(item) {
    const data = { ...this.data };
    data.selectedFilters[item.key] = null;
    this.setData(data);
    this.filterSortProducts();
  },

  async loadData() {
    this.setData({
      isLoading: true,
    });

    try {
      const [products, otherProducts, filters, sorts] = await Promise.all([
        getProductsByCategoryIdAPI(),
        getOtherProductsAPI(),
        getFiltersAPI(),
        getSortsAPI(),
      ]);

      this.setData({
        products,
        otherProducts,
        filters,
        sorts,
        selectedSort: sorts[0],
        isLoading: false,
      });
    } catch {
      this.setData({
        isLoading: false,
      });
    }
  },

  async filterSortProducts() {
    this.setData({
      isLoading: true,
    });

    try {
      const products = await filterSortProductsAPI({
        filters: this.data.selectedFilters,
        sort: this.data.selectedSort,
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

  onCustomIconEvent(e) {
    my.navigateTo({ url: 'pages/cart/index' });
  },

  // Life cycle
  onLoad(query) {
    const { category_name = 'Category' } = queryString.parse(query);
    my.setNavigationBar({
      title: `${category_name} detail`,
    });
  },

  onShow() {
    loadBadgeCart();
  },

  onReady() {
    this.loadData();
  },
});
