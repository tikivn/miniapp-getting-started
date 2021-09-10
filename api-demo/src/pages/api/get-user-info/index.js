async function getUserInfo() {
  return new Promise((resolve, reject) => {
    my.getUserToken({
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

  onLoad() {
    my.addIconsToNavigationBar({
      icons: [
        {
          image:
            'https://dev-tikiscp.tikicdn.com/miniapps/com.tiki.ansang/0.0.2/7/b2094cebe90711eba0ceceb769db1d12/pages/image/image.png',
        },
        {
          image: 'images/app_logo.png',
          badge: '1111111',
        },
        {
          image: '/images/app-not-found.png',
          width: 25,
          height: 25,
          badge: '10',
        },
      ],
      padding: 30,
      success: (res) => {
        console.log(res);
      },
      fail: (res) => {
        console.log(res);
      },
    });
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

  onCustomIconEvent(e) {
    console.log(e);
  },
});
