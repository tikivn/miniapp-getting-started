Component({
  props: {
    isLoading: true,
    orderIcons: [
      {
        key: 'waiting',
        value: 'Waiting for payment',
        src: '/assets/icons/ic-waiting-payment.svg',
      },
      {
        key: 'processing',
        value: 'Processing',
        src: '/assets/icons/ic-processing.svg',
      },
      {
        key: 'shipping',
        value: 'Shipping',
        src: '/assets/icons/ic-shipping.svg',
      },
    ],
    numOrders: {
      waiting: 0,
      processing: 0,
      shipping: 0,
    },
  },

  methods: {
    onMoveOrderManagement() {
      my.navigateTo({ url: 'pages/order-management/index' });
    },
  },

  // Life cycle
  didMount() {},
});
