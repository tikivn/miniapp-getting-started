Page({
  data: {
    items: [],
    aligns: ['start', 'center', 'end'],
    behaviors: ['smooth', 'auto'],
    align: null,
    behavior: null,
  },
  recycleRef: null,
  onLoad() {
    this.setData({ items: [...Array(5000).keys()] });
    this.recycleRef = my.createRecycleContext('recycle');
  },
  scrollToIndex(index) {
    this.recycleRef.scrollToIndex({
      index,
      align: this.data.align,
      behavior: this.data.behavior,
    });
  },
  scrollTo1000() {
    // this.recycleRef.scrollToIndex(1000);
    this.scrollToIndex(999);
  },
  scrollToTop() {
    // this.recycleRef.scrollTo({ top: 0 });
    if (this.data.behavior) {
      this.recycleRef.scrollTo({
        top: 0,
        behavior: this.data.behavior,
      });
    } else {
      this.scrollToIndex(0);
    }
  },
  changeAlign(event) {
    this.setData({ align: event.detail.value });
  },
  changeBehavior(event) {
    this.setData({ behavior: event.detail.value });
  },
});
