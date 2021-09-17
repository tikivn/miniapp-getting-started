Component({
  props: {
    isLoading: true,
    src: '',
    text: '',
    value: '',
    onTap: () => {},
  },
  methods: {
    _onTap() {
      this.props.onTap();
    },
  },
});
