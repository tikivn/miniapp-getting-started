Component({
  props: {
    onShowCouponInput() {},
    onPay() {},
  },
  onInit() {},
  methods: {
    onShowCouponInput() {
      if (this.props.cart.coupon.status === 'NONE')
        this.props.onShowCouponInput();
    },
    onResetCoupon() {
      this.props.onResetCoupon();
    },
    onPay() {
      this.props.onPay();
    },
  },
});
