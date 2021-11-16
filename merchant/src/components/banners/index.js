Component({
  props: {
    className: '',
    isLoading: true,
    banners: [],
    onTapBanner: () => {},
  },

  methods: {
    _onTapBanner(event) {
      const { item } = event.target.dataset;
      this.props.onTapBanner(item);
    },
  },
});
