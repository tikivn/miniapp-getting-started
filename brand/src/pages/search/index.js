import {
  goToProductDetail,
  navigate,
  showCart,
  openDeeplink,
} from '../../utils/navigate';
import { getProductsAPI } from '../../services/index';
import { systemInfo } from '../../utils/system';
import { defaultSorts } from '../../utils/constant';
import { filters, formatFiltersToQuery } from '../../utils/filter';
import { getStorage, setStorage } from '../../utils/storage';
import { group } from '../../utils/common';

Page({
  hasMore: false,
  actionButtons: 0,
  maxSearch: 5,
  isSaveRecentKeyAfterScroll: false,

  data: {
    searchTerm: '',
    recentKeys: [],
    isLoadingCategories: false,
    isLoadingProduct: true,
    isLoadingMoreProduct: false,
    products: {
      data: [],
      paging: {
        current_page: 0,
        last_page: 0,
      },
    },
    popularProducts: {
      data: [],
    },
    sorts: defaultSorts,
    selectedSort: defaultSorts[0],
    selectedCategory: null,
    filters,
    selectedFilters: {
      service: null,
      category: null,
      stock_location: null,
      price: null,
      priceRange: {
        start: null,
        end: null,
      },
    },
  },

  async loadData() {
    this.setData({
      isLoadingProduct: true,
      isLoadingCategories: true,
    });

    try {
      const [products, popularProducts, recentKeys] = await Promise.all([
        getProductsAPI({
          page: 1,
          limit: 10,
          category: this.data.selectedCategory,
          sort: this.data.selectedSort.value,
        }),
        getProductsAPI({
          page: 1,
          limit: 4,
          sort: 'default',
        }),
        getStorage('recent-search'),
      ]);

      this.hasMore = products.paging.current_page < products.paging.last_page;

      this.setData({
        products,
        popularProducts,
        categories: group(products.filters[0].values, 4),
        isLoadingProduct: false,
        isLoadingCategories: false,
        recentKeys: recentKeys ? recentKeys.slice(0, this.maxSearch) : [],
      });
    } catch {
      this.setData({
        isLoadingProduct: false,
        isLoadingCategories: false,
      });
    }
  },

  async loadProducts() {
    this.setData({
      isLoadingProduct: true,
    });
    try {
      const products = await getProductsAPI({
        page: 1,
        limit: 10,
        sort: this.data.selectedSort.value,
        category: this.data.selectedCategory,
        filter: formatFiltersToQuery(this.data.selectedFilters),
        q: this.data.searchTerm,
      });
      this.hasMore = products.paging.current_page < products.paging.last_page;
      this.setData({
        products,
        isLoadingProduct: false,
      });
    } catch {
      this.setData({
        isLoadingProduct: false,
      });
    }
  },

  async loadMoreProducts() {
    const { products, isLoadingProduct, isLoadingMoreProduct } = this.data;

    if (!this.hasMore || isLoadingProduct || isLoadingMoreProduct) return;

    this.setData({ isLoadingMoreProduct: true });

    const { data: currentProducts, paging: currentPaging } = products;

    try {
      const { data: nextProducts, paging } = await getProductsAPI({
        page: currentPaging.current_page + 1,
        limit: 10,
        sort: this.data.selectedSort.value,
        category: this.data.selectedCategory,
        filter: formatFiltersToQuery(this.data.selectedFilters),
        q: this.data.searchTerm,
      });

      this.hasMore = paging.current_page < paging.last_page;

      this.setData({
        products: {
          data: [...currentProducts, ...nextProducts],
          paging,
        },
        isLoadingMoreProduct: false,
      });
    } catch {
      this.setData({ isLoadingMoreProduct: false });
    }
  },

  onSelectFilter(selectedFilters) {
    this.setData({
      selectedFilters,
    });
    this.loadProducts();
  },

  onSelectSort(selectedSort) {
    this.setData({
      selectedSort,
    });
    this.loadProducts();
  },

  removeFilter(item) {
    const data = { ...this.data };

    if (item.key === 'priceRange') {
      data.selectedFilters[item.key] = {
        start: null,
        end: null,
      };

      this.setData(data);
      this.loadProducts();

      return;
    }

    const servicePos =
      data.selectedFilters.service &&
      data.selectedFilters.service.findIndex(
        (serv) => serv.query_name === item.key,
      );

    if (typeof servicePos === 'number' && servicePos !== -1) {
      data.selectedFilters.service[servicePos].checked = false;

      this.setData(data);
      this.loadProducts();

      return;
    }

    data.selectedFilters[item.key] = null;

    this.setData(data);
    this.loadProducts();
  },

  onTapProduct(product) {
    this.addNewRecentKey(this.data.searchTerm);
    goToProductDetail({ product, page: 'product' });
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

  async onInput(searchTerm) {
    this.isSaveRecentKeyAfterScroll = false;
    const recentSearch = await getStorage('recent-search');
    const keys =
      searchTerm === ''
        ? { recentKeys: recentSearch, isLoadingProduct: false }
        : { isLoadingProduct: true };

    this.setData({
      searchTerm,
      ...keys,
    });
  },

  async onSearch(searchTerm) {
    if (searchTerm) {
      this.loadProducts();
    }
  },

  onConfirm(searchTerm) {
    this.onSearch(searchTerm);
    this.addNewRecentKey(searchTerm);
  },

  onClear(searchTerm) {
    this.addNewRecentKey(searchTerm);
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

  clearAllRecentKeys() {
    setStorage('recent-search', []);
    this.setData({
      recentKeys: [],
    });
  },

  onClickKeySearch(event) {
    const { key } = event.target.dataset;
    this.setData({
      searchTerm: key,
      isLoadingProduct: true,
    });
    this.addNewRecentKey(key);
  },

  async addNewRecentKey(searchTerm) {
    if (!searchTerm || searchTerm.length === 0) return;

    const keysSearch = await getStorage('recent-search');
    let recentKeys = keysSearch ? keysSearch.slice(0, this.maxSearch) : [];
    if (recentKeys.includes(searchTerm)) {
      recentKeys = recentKeys.filter((k) => k !== searchTerm);
    }
    const newKeys = [searchTerm, ...recentKeys.slice(0, this.maxSearch - 1)];
    setStorage('recent-search', newKeys);
    this.setData({
      recentKeys: newKeys,
    });
  },

  onCustomIconEvent() {
    openDeeplink('tikivn://cart');
  },

  // Life cycle
  onLoad() {
    showCart();
  },

  onPageScroll(event) {
    const { scrollHeight, scrollTop } = event;

    if (systemInfo.windowHeight + scrollTop >= scrollHeight - 1000)
      this.loadMoreProducts();
  },

  onReady() {
    this.loadData();
    this.setData({
      filters,
    });
  },
});
