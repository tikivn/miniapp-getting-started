Page({
  onMessage(e) {
    const wvcontext = my.createWebViewContext('webview');
    wvcontext.postMessage(e);
  },
})