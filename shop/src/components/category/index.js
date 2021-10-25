Component({
  props: {
    className: '',
    isLoading: false,
    category: {
      id: '',
      image: '',
      name: '',
    },
    onTapCategory: () => {},
  },

  methods: {
    async _onTapCategory() {
      const { category, onTapCategory } = this.props;

      onTapCategory(category);
    },
  },
});
