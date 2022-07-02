import { getStorage, setStorage } from '../../utils/storage';
import { LOADING_STATUS } from '../../utils/constant';
import { getProductsSearchAPI, getProductsAPI } from '../../services/index';
import { systemInfo } from '../../utils/system';
import { navigate } from '../../utils/navigate';

const sellerId = getApp().sellerId;

Page({
  scrollTimeout: null,
  searchTimeout: null,
  errorTimeout: null,
  loading: false,
  sortButtonTop: 0,
  prevScrollTop: 0,
  data: {
    isStickSortButton: false,
    isScrollUp: false,
    isLoading: true,
    otherProducts: [],
    products: [],
    next_page: null,
    status: LOADING_STATUS.INITIAL,
    LOADING_STATUS,
    searchTerm: '',
    recentKeys: [],
    sorts: [
      {
        label: 'Phổ biến',
        value: 'default',
      },
      {
        label: 'Bán chạy',
        value: 'top_seller',
      },
      {
        label: 'Hàng mới',
        value: 'newest',
      },
      {
        label: 'Giá thấp',
        value: 'price,asc',
      },
      {
        label: 'Giá cao',
        value: 'price,desc',
      },
    ],
    selectedSort: {
      label: 'Phổ biến',
      value: 'default',
    },
  },

  async getSearchHistory() {
    try {
      const recentSearch = await getStorage(`recentSearch${sellerId}`);
      if (recentSearch) {
        this.setData({ recentKeys: recentSearch || [] });
      }
    } catch {}
  },

  async addSearchHistory(searchTerm) {
    const keysSearch = await getStorage(`recentSearch${sellerId}`);
    let recentKeys = keysSearch ? keysSearch : [];
    if (recentKeys.includes(searchTerm)) {
      recentKeys = recentKeys.filter((k) => k !== searchTerm);
    }
    recentKeys = [searchTerm, ...recentKeys.slice(0, 4)];
    setStorage(`recentSearch${sellerId}`, recentKeys);
    this.setData({ recentKeys });
  },

  async onChangeSearchInput(event) {
    const { value } = event.detail;
    if (value.length === 0) {
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.setData({
        status: LOADING_STATUS.INITIAL,
        searchTerm: value,
        products: [],
      });
      return;
    }

    this.setData({ searchTerm: value }, () => {
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(() => {
        this.onSearch(true);
      }, 400);
    });
  },

  addProductToHistory(product) {
    this.addSearchHistory(this.data.searchTerm);
    navigate({
      page: 'product-detail',
      params: {
        product_id: product.id,
        spid: product.seller_product_id,
      },
    });
  },

  onTapProduct(product) {
    navigate({
      page: 'product-detail',
      params: {
        product_id: product.id,
        spid: product.seller_product_id,
      },
    });
  },

  clearSearchInput() {
    this.onChangeSearchInput({ detail: { value: '' } });
  },

  async removeKeySearch(key) {
    const recentKeys = await getStorage(`recentSearch${sellerId}`);
    const removedKeys = recentKeys.filter((k) => k !== key);
    setStorage(`recentSearch${sellerId}`, removedKeys);
    this.setData({
      recentKeys: removedKeys,
    });
  },

  removeAllKeySearch() {
    setStorage(`recentSearch${sellerId}`, []);
    this.setData({
      recentKeys: [],
    });
  },

  applySearchKey(key) {
    this.setData({
      searchTerm: key,
    });

    this.onSearch(true);
  },

  onConfirm() {
    this.addSearchHistory(this.data.searchTerm);
    this.onSearch(true);
  },

  showNotFound() {
    if (this.data.searchTerm.length === 0) {
      this.setData({ status: LOADING_STATUS.INITIAL, products: [] });
      return;
    }
    if (this.errorTimeout) {
      clearTimeout(this.errorTimeout);
    }
    this.errorTimeout = setTimeout(() => {
      this.setData({
        status:
          this.data.searchTerm.length === 0
            ? LOADING_STATUS.INITIAL
            : LOADING_STATUS.ERROR,
        products: [],
      });
    }, 400);
  },

  onSelectSort(selectedSort) {
    this.setData({
      selectedSort,
    });
    this.onSearch(true);
  },

  async onSearch(refresh) {
    try {
      if (this.loading || (!refresh && !this.canLoadMore)) {
        return;
      }
      this.loading = true;
      this.setData({
        status: refresh ? LOADING_STATUS.LOADING : LOADING_STATUS.LOAD_MORE,
      });
      const { searchTerm, selectedSort, products, next_page } = this.data;

      const rs = await getProductsSearchAPI({
        page: refresh ? 1 : next_page,
        limit: 10,
        sellerId,
        keyword: searchTerm,
        sort: selectedSort.value,
      });
      const productsData = rs.data || [];
      const isNotFound = refresh && productsData.length === 0;
      if (isNotFound) {
        this.showNotFound();
      } else {
        const key =
          this.data.status !== LOADING_STATUS.INITIAL
            ? { status: LOADING_STATUS.SUCCESS }
            : {};
        this.setData({
          products: refresh ? productsData : products.concat(productsData),
          next_page: rs.next_page,
          ...key,
        });
        this.canLoadMore = !!rs.next_page;
      }
    } catch {
      this.showNotFound();
    } finally {
      this.loading = false;
    }
  },

  async loadData() {
    this.setData({
      isLoading: true,
    });

    try {
      const popularProducts = await getProductsAPI({
        sellerId,
        limit: 10,
      });
      await this.getSearchHistory();

      this.setData({
        otherProducts: popularProducts.data,
        isLoading: false,
      });
    } catch {
      this.setData({
        isLoading: false,
      });
    }
  },

  onPageScroll(event) {
    const { isStickSortButton, isScrollUp, status, searchTerm } = this.data;
    const { scrollHeight, scrollTop } = event;
    if (
      status === LOADING_STATUS.INITIAL ||
      status === LOADING_STATUS.ERROR ||
      searchTerm.length === 0
    )
      return;

    if (scrollTop >= this.sortButtonTop - 80 && !isStickSortButton)
      this.setData({
        isStickSortButton: true,
      });
    if (scrollTop < this.sortButtonTop - 80 && isStickSortButton)
      this.setData({
        isStickSortButton: false,
      });
    if (scrollTop < this.prevScrollTop && !isScrollUp)
      this.setData({
        isScrollUp: true,
      });
    if (scrollTop > this.prevScrollTop && isScrollUp)
      this.setData({
        isScrollUp: false,
      });

    this.prevScrollTop = scrollTop;

    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    this.scrollTimeout = setTimeout(async () => {
      if (systemInfo.windowHeight + scrollTop >= scrollHeight - 1000) {
        this.onSearch(false);
      }
    }, 200);
  },

  // Life cycle
  async onReady() {
    this.loadData();
    my.createSelectorQuery()
      .select('.search-sort-button')
      .boundingClientRect()
      .exec(([sortButton]) => {
        this.sortButtonTop = sortButton.top;
      });
  },
});
