Page({
  onCheckNotification() {
    my.checkNotification({
      success: (res) => {
        my.alert({ content: JSON.stringify(res) });
      },
      fail: (res) => {
        my.alert({ content: JSON.stringify(res) });
      },
    });
  },
});
