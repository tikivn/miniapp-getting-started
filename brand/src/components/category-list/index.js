Component({
  props: {
    className: '',
    isLoading: false,
    categories: [],
    onTapCategory: () => {},
  },

  data: {
    isViewMoreCategories: false,
  },

  methods: {
    _onTapCategory(category) {
      this.props.onTapCategory(category);
    },

    viewMoreCategories() {
      this.setData({
        isViewMoreCategories: true,
      });
    },

    viewLessCategories() {
      this.setData({
        isViewMoreCategories: false,
      });
    },
  },
});
