Component({
  props: {
    address: null,
    listAddress: [],
    quote: null,
    onChangeAddress: () => {},
    onChangeQuote: () => {},
    onShowBottomSheet: () => {},
    onHideBottomSheet: () => {},
  },
  data: { showAddress: false, showQuote: false },
  methods: {
    onTapAddress() {
      if (!this.props.listAddress.length) {
        my.navigateTo({ url: "pages/address/index" });
      } else {
        this.setData({ showAddress: true });
        this.props.onShowBottomSheet();
      }
    },
    onTapQuote() {
      this.props.onShowBottomSheet();
      this.setData({ showQuote: true });
    },
    hideAddress() {
      this.setData({ showAddress: false });
      this.props.onHideBottomSheet();
    },
    hideQuote() {
      this.setData({ showQuote: false });
      this.props.onHideBottomSheet();
    },
    selectAdddress(address) {
      this.props.onChangeAddress(address);
      this.hideAddress();
    },
    selectQuote(quote) {
      this.props.onChangeQuote(quote);
      this.hideQuote();
    },
  },
});
