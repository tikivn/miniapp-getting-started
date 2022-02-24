Component({
  props: {
    isLoading: false,
    title: '',
    skeletons: 0,
    className: '',
    categories: [],
    onTapCategory: () => {},
    onTapCategoryTitle: () => {},
  },

  methods: {
    _onTapCategory(category) {
      this.props.onTapCategory(category);
    },

    _onTapCategoryTitle() {
      this.props.onTapCategoryTitle(this.props.title);
    },
  },
});
