Page({
  data: {
    sellerId: "",
  },
  sellerIdChange(e) {
    this.setData({
      sellerId: e.detail.value,
    });
  },
  onTapChange() {
    my.setChatSellerProfileId({
      sellerId: this.data.sellerId,
      success: (res) => {
        // my.alert({content: 'Ok'});
        my.alert({content: `Đã set seller id thành công`});
      },
    });
  },
});