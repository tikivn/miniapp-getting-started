Component({
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
});
