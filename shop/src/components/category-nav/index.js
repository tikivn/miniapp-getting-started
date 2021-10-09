Component({
  data: {
    skeletonsArray: [],
  },

  props: {
    isLoading: false,
    skeletons: 0,
    className: '',
    activatedCategory: {},
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
