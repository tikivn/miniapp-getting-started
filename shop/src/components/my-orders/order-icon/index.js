Component({
  props: {
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
