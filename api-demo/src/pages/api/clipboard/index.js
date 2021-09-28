Page({
  data: {
    text: undefined,
  },
  textChange(e) {
    this.setData({
      text: e.detail.value,
    });
  },
  onSetClipboard() {
    my.setClipboard({
      text: this.data.text,
      success: (res) => {
        my.alert({ title: 'Success' });
      },
      fail: (e) => {
        my.alert({ title: "error", content: JSON.stringify(e) });
      },
    });
  },
  onGetClipboard() {
    my.getClipboard({
      success: (res) => {
        my.alert({ title: 'Success', content: res.text });
      },
      fail: (e) => {
        my.alert({ title: "error", content: JSON.stringify(e) });
      },
    });
  },
});
