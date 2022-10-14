Page({
  navigateToMiniApp() {
    my.navigateToMiniApp({
      appId: 'vn.tiki.login',
      extraData: {
        from: 'MiniApp Demo',
      },
      callback: (data) => {
        my.alert({content: JSON.stringify(data)});
      },
      success: (e) => {
        
      },
      fail: (e) => { 
      },
    });
  },
 
});
