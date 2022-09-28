Page({
  data: {},
  onLoad() {
    this.onSocketOpen = this.onSocketOpen.bind(this);
    my.onSocketOpen(this.onSocketOpen);
    this.onSocketClose = this.onSocketClose.bind(this);
    my.onSocketClose(this.onSocketClose);
    this.onSocketError = this.onSocketError.bind(this);
    my.onSocketError(this.onSocketError);
    this.onSocketMessage = this.onSocketMessage.bind(this);
    my.onSocketMessage(this.onSocketMessage);
  },
  onUnload() {
    my.offSocketOpen(this.onSocketOpen);
    my.offSocketClose(this.onSocketClose);
    my.offSocketError(this.onSocketError);
    my.offSocketMessage(this.onSocketMessage);
  },
  onShow() {
    this.onConnect();
  },
  onHide() {
    this.onDisconnect();
  },
  onSocketOpen() {
    my.alert({ content: 'socket open' });
  },
  onSocketClose() {
    my.alert({ content: 'socket close' });
  },
  onSocketError(e) {
    my.alert({ content: 'socket error ' + JSON.stringify(e) });
  },
  onSocketMessage(e) {
    console.log('socket receive message ' + JSON.stringify(e));
  },
  onListener() {
    my.onSocketOpen(this.onSocketOpen);
    my.onSocketClose(this.onSocketClose);
    my.onSocketError(this.onSocketError);
    my.onSocketMessage(this.onSocketMessage);
  },
  offListener() {
    my.offSocketOpen();
    my.offSocketClose();
    my.offSocketError();
    my.offSocketMessage();
  },
  onConnect() {
    my.connectSocket({
      url: 'ws://localhost:9999',
      success: function (res) {
        my.alert({ content: 'connect success' });
      },
      fail: function (res) {
        my.alert({ content: 'connect fail' });
      },
    });
  },
  onDisconnect() {
    my.closeSocket();
  },
  onSendSocketMessage() {
    my.sendSocketMessage({ data: 'hello' });
  },
});
