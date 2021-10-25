import { getCouponsAPI, getPopularProductsAPI } from '../../services/index';
import { EMITTERS } from '../../utils/constants';
import { navigateToPDP } from '../../utils/navigate';

const app = getApp();

Page({
  disposableCollection: [],

  data: {
    isLoading: true,
    cart: {
      buyer: {},
      seller: {},
      orderedProducts: [],
      shippingFee: 0,
      price: 0,
      total: 0,
      coupon: {
        name: '',
        discount: 0,
        isValid: false,
      },
    },
    coupons: [],
    modal: {
      key: '',
      isShow: false,
      headers: [],
      descriptions: [],
      leftButton: '',
      rightButton: '',
    },
    isShowCouponBottomSheet: false,
  },

  onTapProduct(product) {
    navigateToPDP(product.id);
  },

  onTapContinue() {
    my.navigateTo({ url: 'pages/home/index' });
  },

  async loadData() {
    try {
      this.setData({
        isLoading: true,
      });
      const [coupons, popularProducts] = await Promise.all([
        getCouponsAPI(),
        getPopularProductsAPI(),
      ]);
      this.setData({
        coupons,
        popularProducts,
        cart: app.cart,
        isLoading: false,
      });
    } catch {
      this.setData({
        isLoading: false,
      });
    }
  },

  showCouponBottomSheet() {
    if (this.data.cart.total > 0)
      this.setData({
        isShowCouponBottomSheet: true,
      });
  },

  hideCouponBottomSheet() {
    this.setData({
      isShowCouponBottomSheet: false,
    });
  },

  async onSelectCoupon(code) {
    this.hideCouponBottomSheet();
    app.selectCoupon(code);
  },

  onRemoveCoupon() {
    app.removeCoupon();
  },

  onRemoveProduct(product) {
    app.removeProduct(product);
  },

  onChangeQuantityProduct(product, quantity) {
    app.changeQuantityProduct(product, quantity);
  },

  hideModal() {
    this.setData({
      modal: {
        isShow: false,
      },
    });
  },

  makePayment() {
    this.setData({
      modal: {
        key: 'payment',
        isShow: true,
        headers: ['Payment'],
        descriptions: [
          'This is the mock request payment.',
          'Please select the result you want to return.',
        ],
        leftButton: 'Fail',
        rightButton: 'Success',
      },
    });
  },

  makePaymentFail() {
    this.setData({
      modal: {
        key: 'payment_failed',
        isShow: true,
        headers: ['Payment Failed'],
        descriptions: ['Your payment was rejected.', 'Please try again.'],
        leftButton: '',
        rightButton: 'Done',
      },
    });
  },

  makePaymentSuccess() {
    app.resetCart();
    this.setData({
      modal: {
        key: 'payment_success',
        isShow: true,
        headers: ['Payment Successful'],
        descriptions: ['Please check your order management'],
        leftButton: 'Shopping',
        rightButton: 'Tracking',
      },
    });
  },

  onClickModalLeftButton() {
    switch (this.data.modal.key) {
      case 'payment':
        this.makePaymentFail();
        break;
      case 'payment_success':
        this.hideModal();
        my.navigateTo({ url: 'pages/home/index' });
        break;
    }
  },

  onClickModalRightButton() {
    switch (this.data.modal.key) {
      case 'payment':
        this.makePaymentSuccess();
        break;
      case 'payment_failed':
        this.hideModal();
        break;
      case 'payment_success':
        this.hideModal();
        my.navigateTo({ url: 'pages/order-management/index' });
        break;
    }
  },

  // Life cycle
  async onLoad() {
    this.disposableCollection.push(
      app.cartEvent.on(EMITTERS.CART_UPDATE, (cart) =>
        this.setData({
          cart,
        }),
      ),
    );
  },

  onShow() {
    this.loadData();
  },

  onUnload() {
    this.disposableCollection.forEach((dispose) => dispose());
  },
});
