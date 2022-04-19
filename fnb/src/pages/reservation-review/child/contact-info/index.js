Component({
  props: {
    contact: {},
    errMsg: {},
    smsReminder: false,
    onInput() {},
    onHidePadding() {},
    onShowPadding() {},
    onToggleSMSRemider() {},
  },
  methods: {
    _onInput(e) {
      this.props.onInput(e);
    },
    _onHidePadding() {
      this.props.onHidePadding();
    },
    _onShowPadding() {
      this.props.onShowPadding();
    },
    _onToggleSMSRemider() {
      this.props.onToggleSMSRemider();
    },
  },
});
