Page({
  data: {
    data: {x: 0, y: 0, z: 0},
  },
  onReady() {
    this.acceleronmeterChangeCallback = (res) => {
      // my.alert({title: 'Success', content: `x: ${res.x}, y: ${res.y}, z: ${res.z}`});
      this.setData({data: res});
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
