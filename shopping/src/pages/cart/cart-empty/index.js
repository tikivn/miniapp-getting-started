Component({
  onGoToHome() {
    my.navigateTo({ url: `pages/index/index` });

    // my.switchTab({
    //   index: 0,
    //   url: 'pages/index/index',
    //   pagePath: 'pages/index/index',
    //   fail: (err) => {
    //     console.log(err);
    //   }
    // })
  },
});
