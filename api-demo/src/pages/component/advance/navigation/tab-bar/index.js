Page({
  data: {
    textColor: undefined,
    bgColor: undefined,
    textBadge: '0'
  },
  textBadgeChange(e) {
    this.setData({
      textBadge: e.detail.value,
    });
  },
  textColorBadgeChange(e) {
    this.setData({
      textColor: e.detail.value,
    });
  },
  bgBadgeChange(e) {
    this.setData({
      bgColor: e.detail.value,
    });
  },
  changeBadgeTab() {
    my.setTabBarBadge({
      index: 0,
      text: !this.data.textBadge ? '0': this.data.textBadge,
      style:{
        textColor: !this.data.textColor ? undefined : this.data.textColor,
        backgroundColor: !this.data.bgColor ? undefined: this.data.bgColor,
      }
    });
  },
});
