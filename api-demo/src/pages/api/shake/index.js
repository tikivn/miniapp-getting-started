Page({
  data: {
    isWatchingShake: false,
  },
  onWatchShake() {
    if(!this.data.isWatchingShake){
      my.watchShake({
        success: () => {
          this.setData({ isWatchingShake: false });
          my.alert({ title: 'Success', content: 'Device is shaked' });
        },
        fail: (e) => {
          this.setData({ isWatchingShake: false });
          my.alert({ title: 'Fail', content: JSON.stringify(e) });
        },
      });

      this.setData({ isWatchingShake: true });
    }
  },
});
