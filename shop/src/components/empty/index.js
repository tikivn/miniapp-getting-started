Component({
  props: {
    title: '',
    description: '',
    buttonText: '',
    className: '',
    onTapButton: () => {},
  },

  methods: {
    _onTapButton() {
      this.props.onTapButton();
    },
  },
});
