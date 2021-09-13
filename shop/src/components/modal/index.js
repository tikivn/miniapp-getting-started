Component({
  props: {
    isShow: false,
    headers: [],
    descriptions: [],
    confirmButton: 'OK',
    cancelButton: '',
    onConfirm: () => {},
    onCancel: () => {},
  },

  methods: {
    _onConfirm() {
      this.props.onConfirm();
    },
    _onCancel() {
      this.props.onCancel();
    },
  },
});
