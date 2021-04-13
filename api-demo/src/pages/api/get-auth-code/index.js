async function getAuthCode() {
  return new Promise((resolve, reject) => {
    my.getAuthCode({
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
      const data = await getAuthCode();
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
