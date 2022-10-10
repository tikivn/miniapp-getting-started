Page({
  onLoad(){
    this.wvcontext = my.createWebViewContext('webview');
    console.log('webview onInit,',this.wvcontext)

  },
  onMessage(e) {
    console.log('webview receive message,',e)
    this.wvcontext.postMessage('pong');
  },
});
