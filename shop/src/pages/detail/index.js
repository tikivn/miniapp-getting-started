import { getDetailProduct, getRelativeProductsAPI } from '../../services/index';
import {
  navigateToPDP,
  navigateToCart,
  loadBadgeCart,
} from '../../utils/navigate';
import queryString from 'query-string';

const app = getApp();

Page({
  data: {
    isShowOption: false,
    isLoading: true,
    product_id: '',
    product: {},
    relativeProducts: [],
    type: 'color',
    colorSelected: {
      id: '',
      color: '',
      image: '',
    },
    sizeSelected: {
      id: '',
      size: '',
    },
    toast: {
      isShow: false,
      content: '',
      showAt: '',
    },
  },

  onTapProduct(product) {
    navigateToPDP(product.id);
  },

  showToast(content) {
    this.setData({
      toast: {
        isShow: true,
        content,
        showAt: Date.now(),
      },
    });
  },

  hideToast() {
    this.setData({
      toast: {
        isShow: false,
        content: '',
        showAt: '',
      },
    });
  },

  addToCart() {
    app.addProduct(this.data.product);
    loadBadgeCart();
    this.showToast(`Add to cart successfully`);
  },

  onSelectColor() {
    this.setData({
      type: 'color',
      isShowOption: true,
    });
  },

  onSelectSize() {
    this.setData({
      type: 'size',
      isShowOption: true,
    });
  },

  onCloseOption() {
    this.setData({
      isShowOption: false,
    });
  },

  onDoneOption(option) {
    const { type } = this.data;

    if (type === 'color') {
      this.setData({
        colorSelected: option,
        isShowOption: false,
      });
    } else {
      this.setData({
        sizeSelected: option,
        isShowOption: false,
      });
    }
  },

  onCustomIconEvent(e) {
    navigateToCart();
  },

  async loadData() {
    this.setData({
      isLoading: true,
    });

    try {
      const [product, relativeProducts] = await Promise.all([
        getDetailProduct(this.data.product_id),
        getRelativeProductsAPI(),
      ]);

      this.setData({
        product,
        relativeProducts,
        isLoading: false,
        colorSelected: product.colors[0],
        sizeSelected: product.sizes[0],
      });
    } catch (error) {
      this.setData({
        isLoading: false,
      });
    }
  },

  addAndGoToCart() {
    app.addProduct(this.data.product);
    loadBadgeCart();
    my.navigateTo({ url: 'pages/cart/index' });
  },

  // Life cycle
  onLoad(query) {
    const { product_id } = queryString.parse(query);
    this.setData({
      product_id,
    });
  },
  onReady() {
    this.loadData();
  },

  onShow() {
    loadBadgeCart();
  },
});
