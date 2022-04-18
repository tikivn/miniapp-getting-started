Page({
  data: {
    status: 'LOADING',
    headerType: 'DEFAULT',
  },

  loadData() {},

  onLoad(query) {},

  onPageScroll(e) {
    if (e.scrollTop >= 50)
      this.setData({
        ...this.data,
        headerType: 'SCROLLED',
      });
  },
  onPhoneCall() {
    my.makePhoneCall({
      number: '0342909090',
      success: (res) => {},
      fail: (e) => {},
    });
  },
});
