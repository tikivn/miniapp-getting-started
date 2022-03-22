Page({
  onGetCart() {
    my.getCart({
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
