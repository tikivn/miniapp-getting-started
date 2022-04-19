Component({
  props: {
    number: 0,
    paddingStatus: '',
    onChangeNumber() {},
  },
  methods: {
    onIncrease() {
      this.props.onChangeNumber(1);
    },
    onDecrease() {
      this.props.onChangeNumber(-1);
    },
    onChangeNumber(v) {
      this.props.onChangeNumber(v);
    },
    onAddCart() {
      this.props.onAddCart();
    },
  },
});
