Page({
  onGetAppId() {
    const res = my.getAppIdSync();
    my.alert({ title: 'App ID', content: res });
  },
});
