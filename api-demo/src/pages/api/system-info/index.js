Page({
  onTap() {
    my.getSystemInfo({
      success: (systemInfo) => {
        this.setData({ systemInfo: JSON.stringify(systemInfo, null, 4) });
      },
    });
  },
});
