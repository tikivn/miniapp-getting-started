Page({
  openAppSetting() {
    my.openAppSetting({
      success: (res) => {
      },
      fail: (res) => {
        my.alert({ title: 'Fail', content: JSON.stringify(res) });
      },
    });
  },
});
