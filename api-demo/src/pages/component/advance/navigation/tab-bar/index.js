Page({
  data: {
    styleBadge: undefined,
  },
  styleBadgeChange(e) {
    this.setData({
      styleBadge: e.detail.value,
    });
  },
  changeBadgeTab() {
    my.setTabBarBadge({
      index: 0,
      text: 10,
      style:{
        backgroundColor:"re"
      }
    });
  },
});
