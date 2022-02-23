Page({
  onGetAppId() {
    const res = my.getAppId();
    my.alert({ title: 'AppID', content: res });
  },
});
