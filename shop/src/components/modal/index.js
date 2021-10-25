Component({
  props: {
    isShow: false,
    headers: [],
    descriptions: [],
    leftButton: 'OK',
    rightButton: '',
    onClickLeftButton: () => {},
    onClickRightButton: () => {},
    onHide: () => {},
  },

  methods: {
    _onClickLeftButton() {
      this.props.onClickLeftButton();
    },
    _onClickRightButton() {
      this.props.onClickRightButton();
    },
    _onHide() {
      this.props.onHide();
    },
  },
});
