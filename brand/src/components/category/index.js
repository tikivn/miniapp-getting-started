Component({
  props: {
    className: '',
    type: 'horizontal',
    isLoading: false,
    category: {
      id: '',
      thumbnail_url: '',
      name: '',
    },
    onTapCategory: () => {},
  },

  methods: {
    _onTapCategory() {
      const { category, onTapCategory } = this.props;
      onTapCategory(category);
    },
  },
});
