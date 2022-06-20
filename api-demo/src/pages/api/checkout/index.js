Page({
  data: {
    products: [],
    storeID: '22573',
    wardID: '10400',
    districtID: '493',
    regionID: '294',
    addressID: '99979499',
  },
  storeIDChange(e) {
    this.setData({
      storeID: e.detail.value,
    });
  },
  wardIDChange(e) {
    this.setData({
      wardID: e.detail.value,
    });
  },
  districtIDChange(e) {
    this.setData({
      districtID: e.detail.value,
    });
  },
  regionIDChange(e) {
    this.setData({
      regionID: e.detail.value,
    });
  },
  addressIDChange(e) {
    this.setData({
      addressID: e.detail.value,
    });
  },
  onAddToCart(e) {
    const productId = e.detail.value;
    my.addToCart({
      products: [
        {
          productId,
          quantity: 1,
        },
      ],
      success: (res) => {
        my.alert({ content: JSON.stringify(res) });
        this.data.products.push(productId);
        this.setData({
          products: this.data.products,
        });
        my.addIconsToNavigationBar({
          icons: [
            {
              image: '/images/cart.png',
              width: 25,
              height: 25,
              badge: `${this.data.products.length}`,
            },
          ],
          padding: 10,
          success: (res) => {
            console.log(res);
          },
          fail: (res) => {
            console.log(res);
          },
        });
      },
      fail: (e) => {
        my.alert({ content: JSON.stringify(e) });
        console.log(e);
      },
    });
  },
  onCheckOut() {
    my.checkout({
      disableAddress: true,
      success: (res) => {
        my.alert({ title: 'success', content: JSON.stringify(res) });
      },
      fail: (e) => {
        my.alert({ content: JSON.stringify(e) });
        console.log(e);
      },
    });
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
});
