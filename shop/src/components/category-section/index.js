Component({
  props: {
    isLoading: false,
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
});
