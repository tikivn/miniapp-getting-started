Component({
  props: {
    isLoading: false,
    type: 'horizontal',
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
