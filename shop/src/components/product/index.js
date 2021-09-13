Component({
  data: {
    formattedPrice: '',
    formattedListPrice: '',
  },

  props: {
    className: '',
    isLoading: false,
    product: {
      id: '',
      name: '',
      image: '',
      price: '',
      listPrice: '',
      discountRate: 0,
    },
    onTapProduct: () => {},
  },

  methods: {
    _onTapProduct() {
      this.props.onTapProduct(this.props.product);
    },
  },
});
