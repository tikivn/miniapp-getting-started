Page({
  onGetUserData() {
    my.getUserOpenId({
      success: (res) => {
        my.showAlert({ content: JSON.stringify(res) });
      },
      fail: (res) => {
        my.showAlert({ content: JSON.stringify(res) });
      },
    });
  },
});
