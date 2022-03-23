Page({
  data: {
    imgs: undefined,
  },
  onChooseImage() {
    my.chooseImage({
      count: 5,
      success: (res) => {
        my.previewImage({
          urls: res.filePaths,
          enablesavephoto: true,
          enableShowPhotoDownload: true,
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
        my.alert({ title: 'Fail', content: JSON.stringify(e) });
      },
    });
  },
});
