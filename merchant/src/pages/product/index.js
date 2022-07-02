import { parseQuery, navigate } from '../../utils/navigate';
import { getProductsAPI } from '../../services/index';
import { systemInfo } from '../../utils/system';

const sellerId = getApp().sellerId;

Page({
  sort: null,
  hasMore: false,

  data: {
    isLoadingProduct: true,
    isLoadingMoreProduct: false,
    products: {
      data: [],
      page: {
        total: 0,
        cursor: 0,
      },
    },
  },

  async loadData() {
    this.setData({
      isLoadingProduct: true,
    });

    try {
      const products = await getProductsAPI({
        sellerId,
        cursor: 0,
        limit: 10,
        sort: this.sort,
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

  async loadMoreProducts() {
    const { products, isLoadingProduct, isLoadingMoreProduct } = this.data;

    if (!this.hasMore || isLoadingProduct || isLoadingMoreProduct) return;

    this.setData({ isLoadingMoreProduct: true });

    const { data: currentProducts } = products;

    try {
      const { data: nextProducts, page } = await getProductsAPI({
        sellerId,
        sort: this.sort,
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
    const { title, value } = parseQuery(query);
    this.sort = value;
    my.setNavigationBar({
      title,
    });
  },

  onPageScroll(event) {
    const { scrollHeight, scrollTop } = event;
    if (systemInfo.windowHeight + scrollTop >= scrollHeight - 1000)
      this.loadMoreProducts();
  },

  onReady() {
    this.loadData();
  },
});
