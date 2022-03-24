Page({
  data: {
    tempFilePath: undefined,
    compressVideoUrl: undefined,
    compressLevel: 'medium',
  },
  onChangeCompressLevel(v){
    this.setData({
      compressLevel: v,
    });
  },
  onChooseVideo() {
    my.chooseVideo({
      maxDuration: 15,
      success: (res) => {
        my.alert({ content: JSON.stringify(res) });
        this.setData({
          tempFilePath: res.filePaths[0],
        });
      },
      fail: (e) => {
        my.alert({ content: JSON.stringify(e) });
        console.log(e);
      },
    });
  },
  onCompressVideo() {
    my.showLoading({ content: "Loading..." });
    my.compressVideo({
      filePath: this.data.tempFilePath,
      compressLevel: this.data.compressLevel,
      success: (res) => {
        this.setData({
          compressVideoUrl: res.filePath,
        });
        my.hideLoading();
      },
      fail: (e) => {
        my.alert({ content: JSON.stringify(e) });
        my.hideLoading();
        console.log(e);
      },
    });
  },
});
