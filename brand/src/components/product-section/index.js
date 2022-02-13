Component({
  props: {
    isLoading: false,
    type: 'vertical',
    skeletons: 4,
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
