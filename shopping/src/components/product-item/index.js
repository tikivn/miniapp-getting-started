Component({
  methods: {
    onAddCart() {
      this.props.onAddCart(this.props.product);
    },
    onGoToProductPage() {
      my.navigateTo({ url: `pages/product/index?id=${this.props.product.id}` });
    }
  }
})
