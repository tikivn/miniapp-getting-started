import {
  parseQuery,
  goToProductDetail,
  navigate,
  openDeeplink,
  showCart,
} from '../../utils/navigate';
import { getProductsAPI } from '../../services/index';
import { systemInfo } from '../../utils/system';
import { defaultSorts } from '../../utils/constant';
import { filters, formatFiltersToQuery } from '../../utils/filter';
import { group } from '../../utils/common';

Page({
  hasMore: false,
  actionButtons: 0,

  data: {
    showActions: false,
    showCategory: false,
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
    isStickButtons: false,
    isScrollUp: false,
  },

  async loadData() {
    this.setData({
      isLoadingProduct: true,
      isLoadingCategories: true,
    });

    try {
      const [products, popularProducts] = await Promise.all([
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
      ]);

      this.hasMore = products.paging.current_page < products.paging.last_page;

      this.setData({
        products,
        popularProducts,
        categories: group(products.filters[0].values, 4),
        isLoadingProduct: false,
        isLoadingCategories: false,
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
    goToProductDetail({ product, page: 'product' });
  },

  goToCategoryDetail(category) {
    navigate({
      page: 'product',
      params: {
        title: category.display_value,
        category: category.query_value,
        // sort: this.data.selectedSort.value,
        showCategory: false,
      },
    });
  },

  onCustomIconEvent() {
    openDeeplink('tikivn://cart');
  },

  // Life cycle
  onLoad(query) {
    const {
      title,
      sort,
      category,
      showCategory = true,
      showActions = true,
    } = parseQuery(query);

    const data = { ...this.data };

    if (sort) {
      const sortObject = defaultSorts.find((item) => item.value === sort);
      if (sortObject) data.selectedSort = sortObject;
    }

    if (category) {
      data.selectedCategory = category;
    }

    this.setData({
      ...data,
      showCategory,
      showActions,
    });

    my.setNavigationBar({
      title: title || 'Sản phẩm',
    });

    showCart();
  },

  onPageScroll(event) {
    const { isStickButtons, isScrollUp } = this.data;
    const { scrollHeight, scrollTop } = event;

    if (scrollTop >= this.actionButtons + 40 && !isStickButtons)
      this.setData({
        isStickButtons: true,
      });
    if (scrollTop < this.actionButtons + 40 && isStickButtons)
      this.setData({
        isStickButtons: false,
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

    if (systemInfo.windowHeight + scrollTop >= scrollHeight - 1000)
      this.loadMoreProducts();
  },

  onReady() {
    this.loadData();
    this.setData({
      filters,
    });

    my.createSelectorQuery()
      .select('.product-action-buttons')
      .boundingClientRect()
      .exec(([actionButtons]) => {
        this.actionButtons =
          actionButtons && actionButtons.top ? actionButtons.top : 0;
      });
  },
});
