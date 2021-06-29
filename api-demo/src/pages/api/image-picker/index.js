Page({
  data: {
    imgs: undefined,
  },
  onChooseImage() {
    my.chooseImage({
      count: 5,
      success: (res) => {
        console.log(res);
        this.setData({
          imgs: res.filePaths,
        });
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
});
