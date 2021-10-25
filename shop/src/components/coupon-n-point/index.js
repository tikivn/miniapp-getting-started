Component({
  props: {
    user: {
      coupons: 0,
      points: 0,
    },
  },

  methods: {
    onMoveMyCoupon() {
      my.navigateTo({ url: 'pages/my-coupon/index' });
    },
    onMoveMyPoint() {
      my.navigateTo({ url: 'pages/my-point/index' });
    },
  },

  // Life cycle
  didMount() {},
});
