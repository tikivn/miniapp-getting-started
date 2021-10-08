Component({
  props: {
    title: '',
    description: '',
    buttonText: '',
    className: '',
    showBottomDivider: false,

    onTapButton: () => {},
  },

  methods: {
    _onTapButton() {
      this.props.onTapButton();
    },
  },
});
