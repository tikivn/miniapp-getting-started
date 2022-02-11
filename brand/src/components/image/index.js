Component({
  props: {
    className: '',
    style: '',
    cacheWidth: 0,
    mode: '',
    lazyLoad: false,
  },

  methods: {
    _onTapButton() {
      this.props.onTapButton();
    },
  },
});
