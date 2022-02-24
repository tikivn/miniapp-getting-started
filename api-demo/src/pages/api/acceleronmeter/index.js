Page({
  onReady() {
    this.acceleronmeterChangeCallback = (res) => {
      my.alert({title: 'Success', content: `x: ${res.x}, y: ${res.y}, z: ${res.z}`});
    };
    my.startAcceleronmeter({
      interval: 'ui',
      success: () => {
        my.onAcceleronmeterChange(this.acceleronmeterChangeCallback);
      },
      fail: (res) => {
        my.alert({ title: 'Fail', content: res.errorMessage });
      },
    });
  },
  onUnload() {
    my.stopAcceleronmeter({
      success: () => {
        my.offAcceleronmeterChange(this.acceleronmeterChangeCallback);
      },
    });
  },
});
