Component({
  props: {
    products: [],
    onChangeQuantity: () => {},
    onDeleteProduct: () => {},
  },
  methods: {
    onChange(item, value) {
      this.props.onChangeQuantity(item, value);
    },
    onDelete(item) {
      this.props.onDeleteProduct(item);
    },
  },
});
