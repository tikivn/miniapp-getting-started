Page({
  data: {
    direction: 0,
  },
  onReady() {
    this.compassChangeCallback = (res) => {
      this.setData({ direction: res.direction });
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
