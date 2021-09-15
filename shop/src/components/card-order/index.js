Component({
  props: {
    className: '',
    isLoading: false,
    order: {
      status: '',
      product: {
        name: '',
        total: 0,
        price: 0
      },
      method: ''
    },
    onTapProduct: () => {},
  },

  methods: {
    _onTapProduct() {
      this.props.onTapProduct(this.props.product);
    },
  },

  // Life cycle
  didMount() {
  },
});
