Component({
  props: {
    className: '',
    sorts: [],
    selectedSort: null,
    onSelect: () => {},
  },

  data: {
    isShow: false,
  },

  methods: {
    showBottomSheet() {
      my.hideKeyboard();
      this.setData({
        isShow: true,
      });
    },

    hideBottomSheet() {
      my.hideOverlay();
      this.setData({
        isShow: false,
      });
    },

    _onSelect(event) {
      const { item } = event.target.dataset;
      this.hideBottomSheet();
      this.props.onSelect(item);
    },
  },
});
