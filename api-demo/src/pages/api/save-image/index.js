Page({
  data: {
    url: undefined,
  },
  urlChange(e) {
    this.setData({
      url: e.detail.value,
    });
  },
  onSaveImage() {
    my.saveImage({
      url: this.data.url,
      success: (res) => {
        my.alert({ title: "Saved!", content: "Check your gallery" });
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
});
