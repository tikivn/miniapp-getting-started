Component({
  isTyping: null,
  props: {
    className: '',
    placeholder: 'Search products',
    value: '',
    onInput: () => {},
    onSearch: () => {},
  },

  methods: {
    _onChangeSearchInput(event) {
      const { value } = event.detail;
      this.props.onInput(value);
    },

    _clearSearchInput() {
      this.props.onInput('');
    },

    _onSearch() {
      this.props.onSearch(this.props.value);
    },
  },

  // Life cycle
  didUpdate() {
    if (this.isTyping) {
      clearTimeout(this.isTyping);
    }
    this.isTyping = setTimeout(() => {
      this._onSearch();
    }, 400);
  },
});
