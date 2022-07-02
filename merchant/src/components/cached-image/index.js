Component({
  props: {
    className: '',
    src: '',
    mode: '',
    style: null,
    cacheWidth: null,
    lazyLoad: false,
    onTap: () => {},
  },
  methods: {
    onTap() {
      this.props.onTap();
    },
  },
});
