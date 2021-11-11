Page({
  data: {
    items: [],
  },
  canPullDown: true,
  onLoad() {
    this.onLoadData(true);
  },
  onPullDownRefresh() {
    this.onLoadData(true);
    my.stopPullDownRefresh();
  },
  onLoadData(refresh) {
    this.setData({ loading: true });
    setTimeout(() => {
      const { items } = this.data;
      const newItems = [...Array(20).keys()].map((_, index) => {
        return {
          index: (refresh ? 0 : items.length) + index,
          height: Math.floor(Math.random() * 80 + 40),
        };
      });

      if (refresh) {
        this.setData({ items: newItems, loading: false });
      } else {
        this.$spliceData({ items: [items.length, 0, ...newItems], loading: false });
      }
    }, 300);
  },
  setCanPullDown(canPullDown) {
    my.setCanPullDown({ canPullDown });
    this.canPullDown = canPullDown;
  },
  onEndReached() {
    this.onLoadData(false);
  },
  onRecycleReady() {
    console.log('ready');
  },
  onScroll(event) {
    if (event.detail.scrollTop === 0 && !this.canPullDown) {
      this.setCanPullDown(true);
      my.setCanPullDown({ canPullDown: true });
    } else if (this.canPullDown) {
      this.setCanPullDown(false);
    }
    console.log('onScroll', event);
  },
  onRangeChanged(event) {
    console.log('onRangeChanged', event);
  },
  onScrolling(event) {
    console.log('onScrolling', event);
  },
});
