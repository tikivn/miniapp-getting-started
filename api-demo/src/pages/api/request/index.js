async function getIp() {
  return new Promise((resolve, reject) => {
    my.request({
      url: "https://api.ipify.org?format=json",
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      dataType: "json",
      success: function (res) {
        resolve(res.ip);
      },
      fail: function (res) {
        reject(res);
      },
    });
  });
}

async function createNewHttpbinPost() {
  return new Promise((resolve, reject) => {
    my.request({
      url: "https://httpbin.org/post",
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      data: {
        from: "tiki mini app",
        message: "my.request create POST request",
      },
      dataType: "json",
      success: function (res) {
        console.log({
          res,
        });
        resolve(res);
      },
      fail: function (res) {
        console.log({
          res,
        });
        reject(res);
      },
    });
  });
}

Page({
  data: {
    get: {
      isLoading: false,
      ip: undefined,
    },
    post: {
      isLoading: false,
      data: undefined,
    },
  },

  async onGetRequest() {
    this.setData({
      get: {
        isLoading: true,
      },
    });
    try {
      const ip = await getIp();
      this.setData({
        get: {
          ip,
          isLoading: false,
        },
      });
    } catch (err) {
      this.setData({
        get: {
          isLoading: false,
        },
      });
    }
  },

  async onPostRequest() {
    this.setData({
      post: {
        isLoading: true,
      },
    });
    try {
      const data = await createNewHttpbinPost();
      this.setData({
        post: {
          data: JSON.stringify(data),
          isLoading: false,
        },
      });
    } catch (err) {
      this.setData({
        post: {
          isLoading: false,
        },
      });
    }
  },
});
