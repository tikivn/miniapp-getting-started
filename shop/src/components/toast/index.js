import { isObjectEqual } from '../../utils/common';

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
    timer: null,

    _onConfirm() {
      this.props.onConfirm();
    },

    _onCancel() {
      this.props.onCancel();
    },
  },

  deriveDataFromProps(nextProps) {
    if (isObjectEqual(this.props, nextProps)) return;

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
