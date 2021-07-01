Component({
  data: {
    number: 0,
  },
  format(value) {
    const number = String(this.props.price).replace(/(.)(?=(\d{3})+$)/g,'$1.');
    this.setData({ number });
  },
  didMount() {
    this.format(this.props.price);
  },
  didUpdate(prevProps) {
    if (prevProps.price !== this.props.price) {
      this.format(this.props.price);
    }
  }
})
