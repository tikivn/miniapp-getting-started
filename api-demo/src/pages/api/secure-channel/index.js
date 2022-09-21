import myx from 'tiki-miniapp-tnx/src/myx';

Page({
  data: {},
  async onTap() {
    const channel = await myx.createSecureChannel();
    const { id } = channel;
    await myx.navigateTo({
      url: `pages/api/secure-channel/plugin/index?channel=${id}`,
    });
    const message = await myx.waitResultSecureChannel({ id });
    this.setData({
      message: JSON.stringify(message),
    });
    await myx.navigateBack();
  },
});
