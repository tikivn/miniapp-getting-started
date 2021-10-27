Page({
  onLoad() {
    my.setBackgroundColor({ backgroundColor: '#ff0000' });
    my.setBackgroundTextStyle({ textStyle: 'light' });
    my.setCanPullDown({ setCanPullDown: true });
  },
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
