import { group } from '../../utils/common';
import { navigate, parseQuery } from '../../utils/navigate';
import { getCategoriesAPI, getProductsAPI } from '../../services/index';
import { defaultSorts } from '../../utils/constant';
import { systemInfo } from '../../utils/system';

const sellerId = getApp().sellerId;

Page({
  categoryId: null,
  parentId: null,
  prevScrollTop: 0,
  sortButtonTop: 0,
  hasMore: false,

  data: {
    isLoadingCategory: true,
    isLoadingProduct: true,
    isLoadingMoreProduct: false,
    isStickSortButton: false,
    isScrollUp: false,
    categories: [],
    sorts: defaultSorts,
    selectedSort: defaultSorts[0],
    products: {
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
      isLoadingCategory: true,
      isLoadingProduct: true,
    });

    try {
      const [categories, products] = await Promise.all([
        getCategoriesAPI({
          sellerId,
          parentId: this.parentId,
        }),
        getProductsAPI({
          sellerId,
          cursor: 0,
          limit: 10,
          categoryId: this.categoryId,
          sort: this.data.selectedSort.value,
        }),
      ]);
      this.hasMore = products.page.cursor < products.page.total;

      this.setData({
        products,
        categories: group(categories, 6),
        isLoadingCategory: false,
        isLoadingProduct: false,
      });
    } catch {
      this.setData({
        isLoadingCategory: false,
        isLoadingProduct: false,
      });
    }
  },

  async loadMoreProducts() {
    const { products, isLoadingProduct, isLoadingMoreProduct } = this.data;

    if (!this.hasMore || isLoadingProduct || isLoadingMoreProduct) return;

    this.setData({ isLoadingMoreProduct: true });

    const { data: currentProducts } = products;

    try {
      const { data: nextProducts, page } = await getProductsAPI({
        sellerId,
        categoryId: this.categoryId,
        sort: this.data.selectedSort.value,
        cursor: products.page.cursor,
        limit: 6,
      });

      this.hasMore = page.cursor < products.page.total;

      this.setData({
        products: {
          data: [...currentProducts, ...nextProducts],
          page,
        },
        isLoadingMoreProduct: false,
      });
    } catch {
      this.setData({ isLoadingMoreProduct: false });
    }
  },

  onSelectSort(selectedSort) {
    this.setData({
      selectedSort,
    });
    this.sortProducts();
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

  async sortProducts() {
    this.setData({
      isLoadingProduct: true,
    });

    try {
      const products = await getProductsAPI({
        sellerId,
        cursor: 0,
        limit: 10,
        categoryId: this.categoryId,
        sort: this.data.selectedSort.value,
      });

      this.hasMore = products.page.cursor < products.page.total;

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

  onTapProduct(product) {
    navigate({
      page: 'product-detail',
      params: {
        product_id: product.id,
        spid: product.seller_product_id,
      },
    });
  },

  // Life cycle
  onLoad(query) {
    const {
      categoryId,
      parentId,
      title = 'Danh mục sản phẩm',
    } = parseQuery(query);
    this.categoryId = categoryId;
    this.parentId = parentId;
    my.setNavigationBar({
      title,
    });
  },

  async onPullDownRefresh() {
    await this.loadData();
    my.stopPullDownRefresh();
  },

  onPageScroll(event) {
    const { isStickSortButton, isScrollUp } = this.data;
    const { scrollHeight, scrollTop } = event;

    if (scrollTop >= this.sortButtonTop + 40 && !isStickSortButton)
      this.setData({
        isStickSortButton: true,
      });
    if (scrollTop < this.sortButtonTop + 40 && isStickSortButton)
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

    if (systemInfo.windowHeight + scrollTop >= scrollHeight - 1000)
      this.loadMoreProducts();
  },

  onReady() {
    this.loadData();
    my.createSelectorQuery()
      .select('.category-sort-button')
      .boundingClientRect()
      .exec(([sortButton]) => {
        this.sortButtonTop = sortButton.top;
      });
  },
});
