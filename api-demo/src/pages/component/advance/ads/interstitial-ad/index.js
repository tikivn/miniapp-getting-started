Page({
  data: {},
  onLoad() {
    this.ad = my.createInterstitialAd();
    this.registerAdListener();
    this.ad.load();
  },

  onUnload() {
    this.unregisterAdListener();
    this.ad.destroy();
  },
  onShowAd() {
    this.ad.show();
  },
  onHideAd() {
    this.ad.destroy();
  },
  registerAdListener() {
    this.ad.onError((error) => {
      my.alert({ content: JSON.stringify(error) });
    });
    this.ad.onLoad(() => {
      my.alert({ content: 'Ad loaded' });
    });
    this.ad.onClose(() => {
      my.alert({ content: 'Ad close' });
    });
  },
  unregisterAdListener() {
    this.ad.offError();
    this.ad.offLoad();
    this.ad.offClose();
  },
});
