Page({
  data: {
    condition: false,
  },
  onReady() {
    this.callback = () => {
      my.alert({
        content: 'Receive a screenshot from the user' , 
      });
    };
    my.onUserCaptureScreen(this.callback);
  },
  onTapOnUserCaptureScreen() {
    my.onUserCaptureScreen();
    this.setData({condition: true});
  },
  onTapOffUserCaptureScreen() {
    my.offUserCaptureScreen();
    this.setData({condition: false});
  },
});
