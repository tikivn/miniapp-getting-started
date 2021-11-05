Page({
  data: {
    imagePath: undefined,
    ratio: '1:1',
  },
  onLoad() {
    my.chooseImage({
      count: 1,
      success: (res) => {
        this.setData({
          imagePath: res.filePaths[0],
        });
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
  onChangeRatio(e) {
    const ratio = e.target.dataset.ratio;
    this.setData({
      ratio,
    });
  },
  onSave(e) {
    const cropper = my.createCropperContext('cropper-1');
    cropper.save();
  },

  onCropperFinish(e) {
    my.previewImage({
      urls: [e.uri],
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
  onChangePhoto() {
    my.chooseImage({
      count: 1,
      success: (res) => {
        this.setData({
          imagePath: res.filePaths[0],
        });
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
});
