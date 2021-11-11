Page({
  data: {
    items: [],
  },
  onLoad() {
    this.onEndReached();
  },
  onEndReached() {
    setTimeout(() => {
      const { items } = this.data;
      const newItems = [...Array(20).keys()].map((_, index) => items.length + index);
      this.$spliceData({ items: [items.length, 0, ...newItems] });
    }, 300);
  },
});
