Page({
  onOpenNativeStore() {
    my.openNativeAppStore({
      googlePlayId: 'vn.tiki.app.tikiandroid',
      appleStoreId: '958100553',
      success: (res) => {
        console.log(res);
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
});
