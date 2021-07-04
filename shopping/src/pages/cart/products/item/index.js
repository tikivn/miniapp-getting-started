Component({
  props: {
    item: null,
    onChange: () => {},
    onDelete: () => {},
  },
  methods: {
    onChange(value) {
      this.props.onChange(this.props.item, value);
    },
    onDelete() {
      this.props.onDelete(this.props.item);
    },
  },
});
