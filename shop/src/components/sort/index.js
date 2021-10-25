Component({
  props: {
    isShow: false,
    className: '',
    sorts: [],
    selectedSort: null,

    onShow: () => {},
    onClose: () => {},
    onSelect: () => {},
  },

  methods: {
    _onShow() {
      this.props.onShow();
    },

    _onClose() {
      this.props.onClose();
    },

    _onSelect(event) {
      const { item } = event.target.dataset;
      this._onClose();
      this.props.onSelect(item);
    },
  },
});
