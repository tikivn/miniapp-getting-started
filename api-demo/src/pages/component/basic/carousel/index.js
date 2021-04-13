Page({
  data: {
    width: 300,
    height: 300,
  },
  onLoad() {
    my.getSystemInfo({
      success: (systemInfo) => {
        console.log('width :>> ', JSON.stringify(systemInfo));
        console.log('height :>> ', systemInfo.windowHeight);
        // this.setData({ width, height });
      },
    });
  }
});
