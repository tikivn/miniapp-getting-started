Component({
  data: {
    width: 0,
  },
  didMount() {
    my.getDeviceInfo({
      success: (info) => {
        this.setData({ width: (info.windowWidth - 32) / 2 - 8 });
      }
    });
  },
  methods: {
    onGoToProductPage() {
      const productId = this.props.product.id;
      my.navigateTo({ url: `pages/product/index?id=${productId}` });
    },
    onAddCart() {
      this.props.onAddCart(this.props.product);
    },
  }
})
