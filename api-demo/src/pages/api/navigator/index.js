Page({
  switchTab() {
    my.switchTab({
      url: 'pages/api/index',
    });
  },

  navigateTo() {
    my.navigateTo({
      url: 'pages/api/navigator/navigator-lvl2/index',
    });
  },

  redirectTo() {
    my.redirectTo({
      url: 'pages/api/navigator/navigator-lvl2/index',
    });
  },

  navigateBack() {
    my.navigateBack();
  },

  navigateToMiniApp() {
    my.navigateToMiniApp({
      appId: 'com.tini.appstore',
      extraData: {
        from: 'MiniApp Demo',
      },
      success: (e) => {
        my.alert({ content: JSON.stringify(e) });
      },
      fail: (e) => {
        my.alert({ content: JSON.stringify(e) });
      },
    });
  },

  navigateBackMiniApp() {
    my.navigateBackMiniApp();
  },

  relaunch() {
    my.reLaunch({ url: 'pages/api/confirm/index' });
  },

  reLaunchMiniApp() {
    my.reLaunchMiniApp({
      appId: 'com.tini.appstore',
      extraData: {
        from: 'Open from MiniApp Demo',
      },
      fail: (e) => {
        my.alert({ content: JSON.stringify(e) });
      },
    });
  },

  exitMiniApp() {
    my.exitMiniApp({
      success: () => {},
      fail: (e) => {
        console.log(e);
      },
    });
  },

  disableHardwareBack() {
    my.redirectTo({
      url: 'pages/api/navigator/navigator-lvl3/index',
    });
  },
});
