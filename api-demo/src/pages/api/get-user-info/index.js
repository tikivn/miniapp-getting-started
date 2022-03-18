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
        data: JSON.stringify(data, null, 4),
      });
    } catch (err) {
      this.setData({
        isLoading: false,
        err,
      });
      my.alert({ title: 'Fail', content: JSON.stringify(err) });
    }
  },
});
