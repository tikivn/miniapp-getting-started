import {
  getCouponsAPI,
  getCartAPI,
  getCouponFromCodeAPI,
} from '../../services/index';

Page({
  data: {
    isLoading: true,
    cart: {
      buyer: {},
      seller: {},
      orderedProducts: [],
      shippingFee: 0,
    },
    coupons: [],
    selectedCoupon: {
      name: '',
      discount: 0,
      isValid: false,
    },
    total: 0,
    modal: {
      isShow: false,
      headers: [],
      descriptions: [],
      confirmButton: '',
      cancelButton: '',
    },
    isShowCouponBottomSheet: false,
  },

  onChangeTotal(total) {
    this.setData({
      total,
    });
  },

  async loadData() {
    try {
      this.setData({
        isLoading: true,
      });
      const [cart, coupons] = await Promise.all([
        getCartAPI(),
        getCouponsAPI(),
      ]);
      this.setData({
        cart,
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

    try {
      const selectedCoupon = await getCouponFromCodeAPI(code);

      this.setData({
        selectedCoupon,
      });
    } catch {}
  },

  onRemoveCoupon() {
    this.setData({
      selectedCoupon: {
        name: '',
        isValid: false,
      },
    });
  },

  // Life cycle
  onShow() {
    this.loadData();
  },
});
