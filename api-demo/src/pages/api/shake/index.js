Page({
  data: {
    isWatchingShake: false,
    justShake: false,
  },
  onWatchShake() {
    if(!this.data.isWatchingShake){
      my.watchShake({
        success: () => {
          this.setData({ isWatchingShake: false, justShake:true });
        },
        fail: (e) => {
          this.setData({ isWatchingShake: false, justShake:false });
          my.alert({ title: 'Fail', content: JSON.stringify(e) });
        },
      });

      this.setData({ isWatchingShake: true, justShake:false });
    }
  },
});
