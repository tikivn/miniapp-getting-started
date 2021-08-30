Page({
  data: {
    phone: undefined,
    
  },
  phoneChange(e) {
    this.setData({
      phone: e.detail.value,
    });
  },
  onPhoneCall() {
    my.makePhoneCall({
      number: this.data.phone,
      success: (res) => {
        console.log(res);
      },
      fail: (e) => {
        my.alert({title: error, content: JSON.stringify(e)});
      },
    });
  },
});
