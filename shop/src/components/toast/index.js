Component({
  timer: null,

  data: {
    _isShow: false,
  },

  props: {
    isShow: false,
    content: '',
    showAt: '',
    closeAfter: 3000,
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

  deriveDataFromProps(nextProps) {
    const { isShow } = nextProps;

    this.setData({
      _isShow: isShow,
    });

    if (isShow) {
      this.timer = setTimeout(() => {
        this.setData({
          _isShow: false,
        });
      }, this.props.closeAfter);
    } else {
      clearTimeout(this.timer);
    }
  },

  didUnmount() {
    clearTimeout(this.timer);
  },
});
