Component({
  props: {
    status: "LOADING",
    onChangeItemNumber() {},
    onChangeItemNumberInput() {},
  },
  didUpdate() {},
  methods: {
    onIncrease() {
      this.props.onChangeItemNumber(
        this.props.id,
        1,
        this.props.product.number
      );
    },
    onDecrease() {
      this.props.onChangeItemNumber(
        this.props.id,
        -1,
        this.props.product.number
      );
    },
    onInput(e) {
      this.props.onChangeItemNumberInput(
        this.props.id,
        e.detail.value,
        this.props.product.number
      );
    },
  },
});
