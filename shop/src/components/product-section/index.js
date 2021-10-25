Component({
  data: {
    skeletonsArray: [],
  },

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

  // Life cycle
  didMount() {
    const { skeletons } = this.props;

    this.setData({
      skeletonsArray: [...Array(skeletons).keys()],
    });
  },
});
