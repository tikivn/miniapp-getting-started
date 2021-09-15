import { getCouponsAPI, getCouponFromCodeAPI } from '../../services/index';
import { EMITTERS } from '../../utils/constants';

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
      isShow: false,
      headers: [],
      descriptions: [],
      confirmButton: '',
      cancelButton: '',
    },
    isShowCouponBottomSheet: false,
  },

  async loadData() {
    try {
      this.setData({
        isLoading: true,
      });
      const coupons = await getCouponsAPI();
      this.setData({
        cart: app.cart,
        coupons,
        isLoading: false,
      });
    } catch {
      this.setData({
        isLoading: false,
      });
    }
  },

  showCouponBottomSheet() {
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
    app.removeCoupon(code);
  },

  onRemoveProduct(product) {
    app.removeProduct(product);
  },

  onChangeQuantityProduct(product, quantity) {
    app.changeQuantityProduct(product, quantity);
  },

  // Life cycle
  async onLoad() {
    this.disposableCollection.push(
      app.cartEvent.on(EMITTERS.CART_UPDATE, (cart) =>
        this.setData({
          cart,
        })
      )
    );
  },

  onShow() {
    this.loadData();
  },

  onUnload() {
    this.disposableCollection.forEach((dispose) => dispose());
  },
});
