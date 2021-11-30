Page({
  data: {
    videoUrl: undefined,
  },
  onChooseVideo() {
    my.chooseVideo({
      success: (res) => {
        my.trimVideo({
          filePath: res.filePaths[0],
          maxDuration: 10,
          minDuration: 5,
          success: (res) => {
            const { filePath } = res;
            this.setData({
              videoUrl: filePath,
            });
          },
        });
      },
      fail: (e) => {
        my.alert({ content: JSON.stringify(e) });
        console.log(e);
      },
    });
  },
});
