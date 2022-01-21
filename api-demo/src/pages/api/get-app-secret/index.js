Page({
  onGetAppSecret() {
    my.getAppSecret({
      success: (res) => {
        my.alert({ title: 'Success', content: res });
      },
      fail: (e) => {
        my.alert({ title: 'Fail', content: JSON.stringify(e) });
      },
    });
  },
});
