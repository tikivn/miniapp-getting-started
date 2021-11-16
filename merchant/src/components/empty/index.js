Component({
  props: {
    className: '',
    title: '',
    description: '',
    buttonText: '',
    onTapButton: () => {},
  },

  methods: {
    _onTapButton() {
      this.props.onTapButton();
    },
  },
});
