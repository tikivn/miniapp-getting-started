Component({
  props: {
    isLoading: true,
    tab: 0,
    src: '',
    text: '',
    value: '',
    onTap: () => {},
  },
  methods: {
    _onTap() {
      this.props.onTap(this.props.tab);
    },
  },
});
