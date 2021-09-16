Component({
  props: {
    isShowArrow: true,
    isLoading: false,
    option: {},
    className: '',
    title: '',
    description: '',
    img: '',
    onTap: () => {},
  },
  methods: {
    _onTap() {
      this.props.onTap(this.props.option);
    },
  },
});
