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

    _onSelect() {
      this.props.onSelect(this.data.value);
    },

    onInput(event) {
      this.setData({
        value: event.detail.value,
      });
    },
  },
});
