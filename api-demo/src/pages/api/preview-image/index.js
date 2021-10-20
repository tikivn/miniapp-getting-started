Page({
  data: {
    enablesavephoto: false,
    enableShowPhotoDownload: false,
  },
  onChangeSavePhoto(e) {
    this.setData({ enablesavephoto: e.detail.value });
  },
  onChangeDownload(e) {
    this.setData({ enableShowPhotoDownload: e.detail.value });
  },
  onPreview() {
    my.previewImage({
      urls: [
        'https://www.w3schools.com/html/pic_trulli.jpg',
        'https://www.w3schools.com/html/img_chania.jpg',
        'https://www.w3schools.com/html/img_girl.jpg',
      ],
      enablesavephoto: this.data.enablesavephoto,
      enableShowPhotoDownload: this.data.enableShowPhotoDownload,
      success: (res) => {
        console.log('success', res);
      },
      fail: (err) => {
        console.log('fail', err);
      },
    });
  },
});
