Page({
  data: {
    url: undefined,
    image: undefined,
  },
  urlChange(e) {
    this.setData({
      url: e.detail.value,
    });
  },
  onDownloadFile() {
    my.downloadFile({
      url: this.data.url,
      success: (res) => {
        console.log(res);
        this.setData({ image: res });
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
});
