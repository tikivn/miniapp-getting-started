import {
  getCategoriesAPI,
  getNewProductsAPI,
  searchProducts,
} from '../../services/index';
import { group } from '../../utils/common';
import { getStorage, setStorage } from '../../utils/storage';

Page({
  data: {
    isLoading: false,
    inputSearch: '',
    status: '', // '' - searched - filtered
    categories: [],
    popularProducts: [],
    searchProducts: [],
    recentKeys: [],
  },

  handleInputSearch(e) {
    this.setData({
      inputSearch: e.detail.value,
    });
  },

  clearInputSearch() {
    this.setData({
      inputSearch: '',
    });
  },

  async handleOnConfirmSearch(e) {
    const { value } = e.detail;
    if (value) {
      const keysSearch = await getStorage('recent-search');
      const recentKeys = keysSearch ? keysSearch : [];
      !recentKeys.includes(value) &&
        setStorage('recent-search', [value, ...recentKeys]);
      this.loadSearchProducts(value);
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
    this.loadSearchProducts(key);
    this.setData({
      inputSearch: key,
    });
  },

  onTapProduct() {
    my.navigateTo({ url: 'pages/detail/index' });
  },

  async loadSearchProducts(input) {
    this.setData({
      isLoading: true,
    });
    try {
      const products = await searchProducts(input);
      this.setData({
        searchProducts: products,
        isLoading: false,
        status: 'searched',
      });
    } catch (error) {
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
      const [categories, popularProducts] = await Promise.all([
        getCategoriesAPI(),
        getNewProductsAPI(),
      ]);
      this.setData({
        categories: group(categories, 4),
        popularProducts,
        isLoading: false,
      });
    } catch (error) {
      this.setData({
        isLoading: false,
      });
    }
  },

  // Life cycle
  onReady() {
    this.loadData();
  },

  async onShow() {
    const recentKeys = await getStorage('recent-search');
    this.setData({
      status: '',
      recentKeys: recentKeys ? recentKeys : [],
    });
  },
});
