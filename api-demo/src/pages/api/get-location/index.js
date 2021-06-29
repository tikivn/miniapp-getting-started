Page({
  data: {
    location: undefined,
  },
  onGetLocation() {
    my.getLocation({
      cacheTimeout: 1,
      success: (res) => {
        this.setData({ location: res });
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
});
