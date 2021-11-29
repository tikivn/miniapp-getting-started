Page({
  getBattery() {
    my.getBatteryInfo({
      success: (success) => {
        my.alert({ title: 'Success', content: JSON.stringify(success) });
      },
      fail: (fail) => {
        my.alert({ title: 'Fail', content: JSON.stringify(fail) });
      }
    });
  },
});
