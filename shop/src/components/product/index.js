Component({
  props: {
    className: '',
    isLoading: false,
    product: {
      id: '',
      name: '',
      image: '',
      price: '',
      list_price: '',
      discount_rate: 0,
    },
    onTapProduct: () => {},
  },

  methods: {
    _onTapProduct() {
      this.props.onTapProduct(this.props.product);
    },
  },
});
