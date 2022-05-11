Page({
  data: {
    orderId: undefined,
  },
  orderIdChange(e) {
    this.setData({
      orderId: e.detail.value,
    });
  },
  makePaymentV2() {
    my.makePaymentV2({
      orderId: this.data.orderId,
      success: (res) => {
        my.alert({ title: 'success', content: JSON.stringify(res) });
      },
      fail: (e) => {
        my.alert({ title: 'fail', content: JSON.stringify(e) });
      },
    });
  },

});
