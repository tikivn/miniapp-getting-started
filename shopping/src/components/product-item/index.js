Component({
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
