Component({
  props: {
    isLoading: false,
    type: 'vertical',
    skeletons: 0,
    className: '',
    products: [],
    onTapProduct: () => {},
  },

  methods: {
    _onTapProduct(product) {
      this.props.onTapProduct(product);
    },
  },
});
