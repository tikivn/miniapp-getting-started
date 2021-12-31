Page({
  openSetting() {
    my.openSetting({
      success: (res) => {
        my.alert({ title: 'Success', content:  JSON.stringify(res)});
      },
      fail: (res) => {
        my.alert({ title: 'Fail', content: JSON.stringify(res) });
      },
    });
  },
  getSetting() {
    my.getSetting({
      success: (res) => {
        my.alert({ title: 'Success', content:  JSON.stringify(res)});
      },
      fail: (res) => {
        my.alert({ title: 'Fail', content: JSON.stringify(res) });
      },
    });
  },
});
