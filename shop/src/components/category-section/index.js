Component({
  data: {
    skeletonsArray: [],
  },

  props: {
    isLoading: false,
    skeletons: 0,
    className: '',
    type: '',
    categories: [],
    onTapCategory: () => {},
  },

  methods: {
    _onTapCategory(game) {
      this.props.onTapCategory(game);
    },
  },

  didMount() {
    const { skeletons } = this.props;

    this.setData({
      skeletonsArray: [...Array(skeletons).keys()],
    });
  },
});
