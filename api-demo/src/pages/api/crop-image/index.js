Page({
  data: {
    tempFilePath: undefined,
    cropFilePath: undefined,
  },
  onChooseImage() {
    my.chooseImage({
      count: 1,
      success: (res) => {
        console.log(res);
        this.setData({
          tempFilePath: res.filePaths[0],
        });
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },

  onCropImage() {
    my.cropImage({
      filePath: this.data.tempFilePath,
      circle: true,
      width: 400,
      height: 400,
      success: (res) => {
        my.previewImage({
          urls: [res.path],
          enablesavephoto: false,
          enableShowPhotoDownload: false,
          success: (res) => {
            console.log('success', res);
          },
          fail: (err) => {
            console.log('fail', err);
          },
        });
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
});
