Component({
  props: {
    product: {},
    onSelect() {},
    status: 'SUCCESS',
  },
  methods: {
    onSelect() {
      if (this.props.product.available) {
        this.props.onSelect(this.props.product);
      }
    },
  },
});
