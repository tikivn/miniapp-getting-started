let challengeId = '';

async function callSecuritySystem(challengeId) {
  return new Promise((resolve, reject) => {
    my.callSecuritySystem({
      challengeId,
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
      const data = await callSecuritySystem(challengeId);
      this.setData({
        isLoading: false,
        data: JSON.stringify(data),
      });
    } catch (err) {
      this.setData({
        isLoading: false,
        data: JSON.stringify(err),
      });
    }
  },
  onInput(e) {
    challengeId = e.detail.value;
  },
});
