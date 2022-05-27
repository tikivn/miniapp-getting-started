Page({
  data: {
    storeID: 1,
    wardID: 10456,
    districtID: 487,
    regionID: 294,
    addressID: 99979576,
  },
  storeIDChange(e) {
    this.setData({storeID: e.detail.value});
  },
  wardIDChange(e) {
    this.setData({wardID: e.detail.value});
  },
  districtIDChange(e) {
    this.setData({districtID: e.detail.value});
  },
  regionIDChange(e) {
    this.setData({regionID: e.detail.value});
  },
  addressIDChange(e) {
    this.setData({addressID: e.detail.value});
  },
  onCheckOutTikiNgon() {
    const storeID = this.data.storeID;
    const address = {
      wardID: this.data.wardID,
      districtID: this.data.districtID,
      regionID: this.data.regionID,
      addressID: this.data.addressID,
    };
    my.checkout({
      storeID,
      address,
      success: (res) => {
        my.alert({ title: 'success', content: JSON.stringify(res) });
      },
      fail: (e) => {
        my.alert({ content: JSON.stringify(e) });
        console.log(e);
      },
    });
  },
  onCheckOut() {
    my.checkout({
      success: (res) => {
        my.alert({ title: 'success', content: JSON.stringify(res) });
      },
      fail: (e) => {
        my.alert({ content: JSON.stringify(e) });
        console.log(e);
      },
    });
  },
});
