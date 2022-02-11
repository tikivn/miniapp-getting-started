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
      my.hideTabBar();

      my.hideKeyboard();
      this.setData({
        isShow: true,
      });
    },

    hideBottomSheet() {
      my.showTabBar();

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
