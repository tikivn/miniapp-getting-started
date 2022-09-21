import queryString from 'query-string';
import myx from 'tiki-miniapp-tnx/src/myx';

Page({
  data: {},
  onLoad(query) {
    const { channel } = queryString.parse(query);
    this.setData({
      channel,
    });
  },
  textChange(e) {
    this.setData({
      text: e.detail.value,
    });
  },
  async onTap() {
    const { channel, text } = this.data;
    const message = {
      text,
    };
    await myx.sendMessageToSecureChannel({
      id: channel,
      message,
    });
  },
});
