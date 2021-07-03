Component({
  props: {
    address: null,
    quote: null,
    onChangeAddress: () => {},
    onChangeQuote: () => {},
  },
  data: { showAddress: true },
  didMount() {
    // Get from storage to get address
  },
  methods: {
    onTapAddress() {
      this.setData({ showAddress: true });
      // if (!this.props.address) {
      //   my.navigateTo({ url: "pages/address/index" });
      // }
    },
    hideAddress() {
      this.setData({ showAddress: false });
    },
  },
});
