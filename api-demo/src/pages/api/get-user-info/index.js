async function getUserInfo() {
  return new Promise((resolve, reject) => {
    my.getUserInfo({
      success: (res) => {
        resolve(res);
      },
      fail: (res) => {
        reject(res);
      },
    });
  });
}

Page({
  data: {
    isLoading: false,
  },

  async onGetRequest() {
    this.setData({
      isLoading: true,
    });
    try {
      const data = await getUserInfo();
      this.setData({
        isLoading: false,
        data: JSON.stringify(data),
      });
    } catch (err) {
      this.setData({
        isLoading: false,
        err,
      });
    }
  },
});
