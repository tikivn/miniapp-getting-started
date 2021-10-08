import {
  getProductsByCategoryIdAPI,
  getFiltersAPI,
} from '../../services/index';

Page({
  data: {
    isLoading: true,
    products: [],
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
  },

  enabledDisabledSorting() {
    this.setData({
      isSort: !this.data.isSort,
    });
  },

  async loadData() {
    this.setData({
      isLoading: true,
    });

    try {
      const [products, filters] = await Promise.all([
        getProductsByCategoryIdAPI(),
        getFiltersAPI(),
      ]);

      this.setData({
        products,
        isLoading: false,
        filters,
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
