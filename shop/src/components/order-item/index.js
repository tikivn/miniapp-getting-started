Component({
  props: {
    className: '',
    product: {
      thumbnail: '',
      name: '',
      price: 0,
      quantity: 1,
    },
    onRemoveOrder: () => {},
    onChangeQuantityOrder: () => {},
  },

  methods: {
    _onRemoveOrder() {
      this.props.onRemoveOrder(this.props.product);
    },
    _onChangeQuantityOrder(value) {
      this.props.onChangeQuantityOrder(this.props.product, value);
    },
  },
});
