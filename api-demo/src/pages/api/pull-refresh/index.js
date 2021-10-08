Page({
  onStartPullToRefresh() {
    my.startPullDownRefresh();
  },
  onStopPullToRefresh() {
    my.stopPullDownRefresh();
  },
  onPullDownRefresh() {
    my.alert({ title: `Updated at ${Date.now()}` });
  },
});
