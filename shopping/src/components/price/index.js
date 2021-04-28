Component({
  data: {
    number: 0,
  },
  didMount() {
    const number = String(this.props.price).replace(/(.)(?=(\d{3})+$)/g,'$1.');
    this.setData({ number });
  }
})
