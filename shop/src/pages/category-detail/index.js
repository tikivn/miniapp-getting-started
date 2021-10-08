import {
  getProductsByCategoryIdAPI,
  getFiltersAPI,
  getOtherProductsAPI,
  filterSortProductsAPI,
} from '../../services/index';

Page({
  data: {
    isLoading: true,
    products: [],
    otherProducts: [],
    isShowFilter: false,
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
    isSort: false,
  },

  onTapProduct() {
    my.navigateTo({ url: 'pages/detail/index' });
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

  onResetFilter() {
    this.setData({
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
    });
  },

  removeFilter(item) {
    const data = { ...this.data };
    data.selectedFilters[item.key] = null;
    this.setData(data);
    this.filterSortProducts();
  },

  enabledDisabledSorting() {
    this.setData({
      isSort: !this.data.isSort,
    });
    this.filterSortProducts();
  },

  async loadData() {
    this.setData({
      isLoading: true,
    });

    try {
      const [products, otherProducts, filters] = await Promise.all([
        getProductsByCategoryIdAPI(),
        getOtherProductsAPI(),
        getFiltersAPI(),
      ]);

      this.setData({
        products,
        otherProducts,
        isLoading: false,
        filters,
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
        isSort: this.data.isSort,
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

  // Life cycle
  onReady() {
    this.loadData();
  },
});
