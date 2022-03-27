Page({
  data: {
    scope:[],
    permissions: ['contacts', 'location', 'notification', 'camera','photo'],
  },
  onChange(e) {
    this.setData({scope: e.detail.value});
  },
  onCheckPermissions() {
    my.checkNativePermissions({
      scope: this.data.scope,
      success: (res) => {
        my.alert({ content: JSON.stringify(res) });
      },
      fail: (res) => {
        my.alert({ content: JSON.stringify(res) });
      },
    });
  },
});
