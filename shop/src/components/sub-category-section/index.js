Component({
  data: {
    skeletonsArray: [],
  },

  props: {
    isLoading: false,
    title: '',
    skeletons: 0,
    className: '',
    categories: [],
    onTapCategory: () => {},
  },

  methods: {
    _onTapCategory(category) {
      this.props.onTapCategory(category);
    },
  },

  didMount() {
    const { skeletons } = this.props;

    this.setData({
      skeletonsArray: [...Array(skeletons).keys()],
    });
  },
});
