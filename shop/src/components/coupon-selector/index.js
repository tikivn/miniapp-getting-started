Component({
  props: {
    isShow: false,
    coupons: [],
    onClose: () => {},
    onSelect: () => {},
  },

  data: {
    value: '',
  },

  methods: {
    _onClose() {
      this.props.onClose();
    },

    _onSelect(event) {
      const { item } = event.target.dataset;
      const code = (item && item.code) || this.data.value;
      this.props.onSelect(code);
    },

    onInput(event) {
      this.setData({
        value: event.detail.value,
      });
    },
  },
});
