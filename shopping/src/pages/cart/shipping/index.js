Component({
  props: {
    address: null,
    quote: null,
    onChangeAddress: () => {},
    onChangeQuote: () => {},
  },
  data: { showAddress: false, showQuote: false },
  methods: {
    onTapAddress() {
      this.setData({ showAddress: true });
    },
    onTapQuote() {
      this.setData({ showQuote: true });
    },
    hideAddress() {
      this.setData({ showAddress: false });
    },
    hideQuote() {
      this.setData({ showQuote: false });
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