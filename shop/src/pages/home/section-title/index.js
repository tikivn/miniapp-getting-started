Component({
  props: {
    title: '',
    onTapActionButton: () => {},
  },

  methods: {
    _onTapActionButton() {
      this.props.onTapActionButton();
    },
  },
});
