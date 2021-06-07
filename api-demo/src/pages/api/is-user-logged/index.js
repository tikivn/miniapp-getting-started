Page({
  data: {
    isLogged: undefined,
  },

  onCheckUserLoggedIn() {
    my.isLoggedIn({
      success: (res) => {
        this.setData({ isLogged: res });
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
});
