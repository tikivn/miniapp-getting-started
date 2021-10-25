Component({
  props: {
    isLoading: false,
    className: '',
    product: {
      id: '',
      thumbnail: '',
      name: '',
      price: 0,
      quantity: 1,
    },
    onClickRemoveOrder: () => {},
    onChangeQuantityOrder: () => {},
    onTapProduct: () => {},
  },

  methods: {
    _onTapProduct() {
      this.props.onTapProduct(this.props.product);
    },
    _onClickRemoveOrder() {
      this.props.onClickRemoveOrder(this.props.product);
    },
    _onChangeQuantityOrder(value) {
      this.props.onChangeQuantityOrder(this.props.product, value);
    },
  },
});
