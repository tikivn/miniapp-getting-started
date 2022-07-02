import {
  getProductDetails,
  getProductsAPI,
  getProductsSearchAPI,
} from '../../services';
import { navigate, parseQuery } from '../../utils/navigate';
import { loadCartIcon } from '../../utils/cart';
import myx from '../../utils/myx';

const sellerId = getApp().sellerId;

Page({
  data: {
    product: {},
    relativeProducts: [],
    toast: {
      type: 'success',
      isShow: false,
      content: '',
    },
    selectedProduct: {},
  },

  async loadData(product_id, spid) {
    this.setData({
      isLoading: true,
    });

    try {
      const product = await getProductDetails({ id: product_id, spid });
      const relativeProductsInCategoryPromise = getProductsAPI({
        sellerId,
        limit: 4,
        categoryId: product.categories.id,
      });

      const relativeProductsSameNamePromise = getProductsSearchAPI({
        sellerId,
        limit: 4,
        keyword: product.name.split(' ').slice(0, 3).join(' '),
      });

      const [relativeProductsInCategory, relativeProductsSameName] =
        await Promise.all([
          relativeProductsInCategoryPromise,
          relativeProductsSameNamePromise,
        ]);

      const selectedProduct =
        product.configurable_products &&
        (product.configurable_products.find((item) => item.selected) ||
          product.configurable_products[0]);

      this.setData({
        product,
        selectedProduct: selectedProduct ? selectedProduct : product,
        selectedProductId: selectedProduct
          ? selectedProduct.id
          : product.current_seller.product_id,
        relativeProducts: relativeProductsInCategory.data.length
          ? relativeProductsInCategory.data
          : relativeProductsSameName.data,
        isLoading: false,
      });
    } catch {
      this.setData({
        isLoading: false,
      });
    }
  },

  async handleAddToCart() {
    try {
      await myx.addToCart({
        products: [
          {
            productId: this.data.selectedProductId,
            quantity: 1,
          },
        ],
      });
      this.setData({
        toast: {
          isShow: true,
          type: 'success',
          content: 'Thêm vào giỏ hàng thành công',
        },
      });
      const { total } = await myx.getCart({ sellerId });
      loadCartIcon({ isShowDot: total > 0 });
    } catch {
      this.setData({
        toast: {
          isShow: true,
          type: 'fail',
          content: 'Thêm vào giỏ hàng thất bại',
        },
      });
    }
  },

  hideToast() {
    this.setData({
      toast: {
        ...this.data.toast,
        isShow: false,
      },
    });
  },

  handleConfirmOption(selectingProduct) {
    this.setData({
      selectedProduct: selectingProduct,
      selectedProductId: selectingProduct.id,
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

  // Life cycle
  onLoad(query) {
    const { product_id, spid } = parseQuery(query);
    this.loadData(product_id, spid);
  },

  async loadCart() {
    try {
      const { total } = await myx.getCart({ sellerId });
      loadCartIcon({ isShowDot: total > 0 });
    } catch {
      loadCartIcon({ isShowDot: false });
    }
  },

  onShow() {
    this.loadCart();
  },

  onCustomIconEvent() {
    my.openScreen({
      screenCode: 'TK_CART',
    });
  },
});
