Page({
  data: {
    cart: null,
  },
  onGetCart() {
    my.getCart({
      openLogin: true,
      success: (res) => {
        console.log(res);
        my.alert({title: 'Total number of items', content: res.total});
      },
      fail: (res) => {
        console.log(res);
      },
    });
  },
});
