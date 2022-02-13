import debounce from 'lodash/debounce';

Component({
  props: {
    className: '',
    placeholder: 'Tìm kiếm sản phẩm',
    value: '',
    onInput: () => {},
    onSearch: () => {},
    onConfirm: () => {},
    onClear: () => {},
  },

  methods: {
    isTyping: null,

    _onChangeSearchInput: debounce(function (event) {
      this.props.onInput(event.detail.value);
    }, 500),

    _clearSearchInput() {
      this.props.onInput('');
      this.props.onClear(this.props.value);
    },

    _onSearch() {
      this.props.onSearch(this.props.value);
    },

    _onConfirm(event) {
      this.props.onConfirm(event.detail.value);
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
