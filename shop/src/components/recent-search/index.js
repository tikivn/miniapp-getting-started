Component({
  props: {
    className: '',
    recentKeys: [],
    onClickItem: () => {},
    onRemoveItem: () => {},
  },

  methods: {
    _onClickItem(event) {
      this.props.onClickItem(event.target.dataset.item);
    },
    _onRemoveItem(event) {
      this.props.onRemoveItem(event.target.dataset.item);
    },
  },
});
