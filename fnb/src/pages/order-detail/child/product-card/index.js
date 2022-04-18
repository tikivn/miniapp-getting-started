Component({
  props: {
    showLine: false,
    status: "LOADING",
    onChangeItemNumber() {},
  },
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
  },
});
