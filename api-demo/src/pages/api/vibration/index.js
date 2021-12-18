Page({
  onVibrate() {
    my.vibrate({
      fail: (e) => {
        my.alert({ title: 'Fail', content: JSON.stringify(e) });
      },
    });
  },
  onVibrateLong() {
    my.vibrateLong({
      fail: (e) => {
        my.alert({ title: 'Fail', content: JSON.stringify(e) });
      },
    });
  },
  onVibrateShort() {
    my.vibrateShort({
      fail: (e) => {
        my.alert({ title: 'Fail', content: JSON.stringify(e) });
      },
    });
  },
});
