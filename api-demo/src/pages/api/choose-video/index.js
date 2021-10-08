Page({
  data: {
    videoUrl: undefined,
  },
  onChooseImage() {
    my.chooseVideo({
      maxDuration: 15,
      success: (res) => {
        my.alert({ content: JSON.stringify(res) });
        this.setData({
          videoUrl: res.filePaths[0],
        });
      },
      fail: (e) => {
        my.alert({ content: JSON.stringify(e) });
        console.log(e);
      },
    });
  },
});
