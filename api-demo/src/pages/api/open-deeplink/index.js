async function getBanners() {
  return new Promise((resolve, reject) => {
    my.request({
      url: "https://api.tala.xyz/v2/banners?group=tini_store_home",
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      dataType: "json",
      success: function (res) {
        resolve(res.data);
      },
      fail: function (error) {
        reject(error);
      },
    });
  });
}


Page({
  data: {
    banners: []
  },
  onReady() {
    (async () => {
      try {
        const banners = await getBanners();
        this.setData({banners});
      } catch (error) {
        my.alert({ title: 'Fail', content: JSON.stringify(error) });
      }
    })();
  },
});
