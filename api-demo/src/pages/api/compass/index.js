Page({
  onReady() {
    this.compassChangeCallback = (res) => {
      console.log(res);
    };
    my.startCompass({
      interval: 'ui',
      success: () => {
        my.onCompassChange(this.compassChangeCallback);
      },
      fail: (res) => {
        my.alert({ title: 'Fail', content: res.errorMessage });
      },
    });
  },
  onUnload() {
    my.stopCompass({
      success: () => {
        my.offCompassChange(this.compassChangeCallback);
      },
    });
  },
});
