Component({
  props: {
    className: '',
    isLoading: false,
    product: {
      id: '',
      name: '',
      thumbnail_url: '',
      price: 0,
      rating_average: 0,
      review_count: 0,
      list_price: 0,
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
