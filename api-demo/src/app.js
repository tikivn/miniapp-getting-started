App({
  onLaunch(q) {
    //my.alert({ content: JSON.stringify(q) });
  },
  onShow() {
    const options = my.getLaunchOptionsSync();
    console.log('ssssss', options);
    my.alert({ content: JSON.stringify(options) });
  },
  onError(e) {
    console.log(e);
  },
});
