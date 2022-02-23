Page({
  onGetAppId() {
    const res = my.getAppId();
    my.alert({ title: 'App ID', content: res });
  },
});
