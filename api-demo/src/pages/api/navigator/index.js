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
      appId: 'xyz.tala.test.miniappone',
      path: 'pages/api/navigator/index',
      appMeta: {
        cdnBaseUrl:
          'https://dev-tikiscp.tbox.vn/miniapps/xyz.tala.test.miniappone/1.1.0/2/151feea1818111eb86082e3a2f899608/',
        frameworkVersion: '1.34.0',
        frameworkCdnBaseDomain: 'https://dev-tikiscp.tbox.vn/miniapps/framework_files',
      },
      extraData: {
        from: 'MiniApp Demo',
      },
    });
  },

  navigateBackMiniApp() {
    my.navigateBackMiniApp();
  },

  relaunch() {
    my.reLaunch({ url: 'pages/api/confirm/index' });
  },

  exitMiniApp() {
    my.exitMiniApp({
      success: () => {},
      fail: (e) => {
        console.log(e);
      },
    });
  },
});
