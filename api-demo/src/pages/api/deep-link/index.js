Page({
  data: {
    url: undefined,
  },
  urlChange(e) {
    this.setData({
      url: e.detail.value,
    });
  },
  onOpenDeeplink() {
    my.openDeeplink({
      url: this.data.url,
      success: (res) => {
        console.log(res);
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
});
