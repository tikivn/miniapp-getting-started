Page({
  onLoading() {
    my.showOverlay({
      fail: (e) => {
        my.alert({ content: JSON.stringify(e) });
      },
    });
    setTimeout(() => {
      my.hideOverlay();
    }, 3000);
  },
});
