Component({
  props: {
    className: '',
    type: 'vertical',
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
