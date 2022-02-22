Page({
  onGetLaunchOptions() {
    const options = my.getLaunchOptionsSync();
    my.alert({ content: JSON.stringify(options) });
  },
});
