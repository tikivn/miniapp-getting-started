Component({
  props: {
    isShowArrow: true,
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
    }
  },
})
