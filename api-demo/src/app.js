App({
  onLaunch() {},
  onShow() {
    my.navigateTo({ url: 'pages/component/advance/data-visualization/list/index' });
  },
  onError(e) {
    console.log(e);
  },
});
