Page({
  onMessage(e) {
    const wvcontext = my.createWebViewContext('gameview');
    wvcontext.postMessage(e);
  },
})