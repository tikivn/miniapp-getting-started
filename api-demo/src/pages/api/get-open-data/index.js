Page({
  onGetUserData() {
    my.cart.clear({
      seller_id: 1,
      success: (res) => {
        my.alert({ content: JSON.stringify(res) });
      },
      fail: (res) => {
        my.alert({ title: JSON.stringify(res) });
      },
    });
  },
});
