Page({
  data: {
    networkType: undefined,
  },
  onGetNetworkType() {
    my.getNetworkType({
      success: (res) => {
        this.setData({ networkType: res });
        my.alert({ title: 'Success', content: JSON.stringify(res) });
      },
      fail: (e) => {
        my.alert({ title: 'Fail', content: JSON.stringify(e) });
      },
    });
  },
});
