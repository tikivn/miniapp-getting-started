Page({
  data: {
    permissions: [
      { key: 'contacts', value: false },
      { key: 'location', value: false },
      { key: 'notification', value: false },
      { key: 'camera', value: false },
      { key: 'photo', value: false },
    ],
  },
  onChange(e) {
    if (e.detail.value.length > 0) {
      const index = e.detail.value[0];
      this.data.permissions[index] = {
        ...this.data.permissions[index],
        value: !this.data.permissions[index].value,
      };
      this.setData({
        permissions: this.data.permissions,
      });
    }
  },
  onCheckPermissions() {
    const scope = this.data.permissions.reduce((arr, item) => {
      if (item.value) {
        arr.push(item.key);
      }
      return arr;
    }, []);
    my.checkNativePermissions({
      scope,
      success: (res) => {
        my.alert({ content: JSON.stringify(res) });
      },
      fail: (res) => {
        my.alert({ content: JSON.stringify(res) });
      },
    });
  },
});
