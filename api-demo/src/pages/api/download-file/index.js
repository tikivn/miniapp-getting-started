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
        my.alert({ content: JSON.stringify(res) });
        this.setData({ image: res.filePath });
      },
      fail: (e) => {
        my.alert({ content: JSON.stringify(e) });
        console.log(e);
      },
    });
  },
});
