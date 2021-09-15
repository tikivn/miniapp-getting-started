Component({
  props: {
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
