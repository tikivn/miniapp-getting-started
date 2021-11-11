Page({
  data: {
    items: [],
  },
  onLoad() {
    this.setData({ items: [...Array(5000).keys()] });
  },
});
