Component({
  props: {
    onHide: () => {},
    quotes: [],
    quote: null,
  },
  data: {
    selected: null,
    listQuotes: [],
  },
  didMount() {
    this.setData({ selected: this.props.quote, listQuotes: this.props.quotes });
  },
  methods: {
    hideBottomSheet() {
      this.props.onHide();
    },
    onSelect(event) {
      this.setData({ selected: event.target.dataset.item });
    },
  },
});
