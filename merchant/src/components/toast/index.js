Component({
  timer: null,

  props: {
    isShow: false,
    content: '',
    closeAfter: 3000,
    type: 'info',
    bottom: 56,
    actionText: '',
    onConfirm: () => {},
    onCancel: () => {},
    onTapActionText: () => {},
  },

  methods: {
    timer: null,

    _onConfirm() {
      this.props.onConfirm();
    },

    _onCancel() {
      this.props.onCancel();
    },

    _onTapActionText() {
      this.props.onTapActionText();
    },
  },

  // Life cycle
  deriveDataFromProps(nextProps) {
    const { isShow } = nextProps;

    if (isShow === this.props.isShow) {
      return;
    }

    if (isShow) {
      this.timer = setTimeout(() => {
        this._onCancel();
      }, this.props.closeAfter);
    } else {
      clearTimeout(this.timer);
    }
  },

  didUnmount() {
    clearTimeout(this.timer);
  },
});
