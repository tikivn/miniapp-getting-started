Component({
  props: {
    className: '',
    product: {
      thumbnail: '',
      name: '',
      price: 0,
      quantity: 1,
    },
    onClickRemoveOrder: () => {},
    onChangeQuantityOrder: () => {},
  },

  methods: {
    _onClickRemoveOrder() {
      this.props.onClickRemoveOrder(this.props.product);
    },
    _onChangeQuantityOrder(value) {
      this.props.onChangeQuantityOrder(this.props.product, value);
    },
  },
});
