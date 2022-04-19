Component({
  props: {
    min: 0,
    max: 999,
    value: 0,
    step: 1,
    isAllowInput: false,
    onChange() {},
  },
  methods: {
    onIncrease() {
      const { value, step, max } = this.props;
      const num = value + step > max ? max : value + step;
      this.props.onChange(num);
    },
    onDecrease() {
      const { value, step, min } = this.props;
      const num = value - step < min ? min : value - step;
      this.props.onChange(num);
    },
    onChange(e) {
      const { max, min } = this.props;
      let num = Number(e.detail.value) || this.props.min;
      num = num < min ? min : num;
      num = num > max ? max : num;
      this.props.onChange(num);
    },
  },
});
