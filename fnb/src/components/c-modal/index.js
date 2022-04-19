Component({
  props: {
    isShow: false,
    headerContent: '',
    description: '',
    leftButton: 'OK',
    rightButton: '',
    onLeftButtonClick() {},
    onRightButtonClick() {},
    onMaskClick() {},
    onClose() {},
  },

  methods: {
    onLeftButtonClick() {
      this.props.onLeftButtonClick();
    },
    onRightButtonClick() {
      this.props.onRightButtonClick();
    },
    onClose() {
      this.props.onClose();
    },
    onMaskClick() {
      this.props.onMaskClick();
    },
    onKeepingShow() {
      this.setData({ isShow: true });
    },
  },
});
