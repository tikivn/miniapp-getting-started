Component({
  props: {
    address: null,
    quote: null,
    onChangeAddress: () => {},
    onChangeQuote: () => {},
  },
  data: { showAddress: false },
  didMount() {
    // Get from storage to get address
  },
  methods: {
    onTapAddress() {
      this.setData({ showAddress: true });
    },
    hideAddress() {
      this.setData({ showAddress: false });
    },
    selectAdddress(address) {
      this.props.onChangeAddress(address);
    },
  },
});
