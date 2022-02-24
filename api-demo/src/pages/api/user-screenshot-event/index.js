Page({
  data: {
    condition: false,
  },
  onTapOnUserCaptureScreen() {
    my.onUserCaptureScreen({
      success: () => {
        this.setData({condition: true});
      },
    });
  },
  onTapOffUserCaptureScreen() {
    my.offUserCaptureScreen({
      success: () => {
        this.setData({condition: false});
      },
    });
  },
});
