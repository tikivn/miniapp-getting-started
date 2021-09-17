Component({
  props: {
    className: '',
    isLoading: false,
    order: {
      status: '',
      product: {
        name: '',
        total: 0,
        price: 0,
      },
      method: '',
    },
    onTap: () => {},
  },

  methods: {
    _onTap() {
      this.props.onTap();
    },
  },

  // Life cycle
  didMount() {},
});
