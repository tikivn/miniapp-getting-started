Component({
  props: {
    isLoading: false,
    isMultiple: false,
    type: 'vertical-4-categories',
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
