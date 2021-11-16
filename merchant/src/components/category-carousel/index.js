Component({
  props: {
    className: '',
    isLoading: false,
    activatedCategory: 0,
    categories: [],
    onTapCategory: () => {},
  },

  methods: {
    _onTapCategory(category) {
      this.props.onTapCategory(category);
    },

    onCategoryChange(event) {
      this.setData({
        activatedCategory: event.detail.current,
      });
    },
  },
});
