Component({
  props: {
    direction: "column",
    showBadge: true,
  },
  methods: {
    onGoToProductPage() {
      const productId = this.props.product.id;
      my.navigateTo({ url: `pages/product/index?id=${productId}` });
    },
  },
});
