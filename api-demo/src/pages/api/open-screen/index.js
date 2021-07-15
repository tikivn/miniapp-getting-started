Page({
  data: {
    productId: undefined,
    tikiId: undefined,
  },
  productIdChange(e) {
    this.setData({
      productId: e.detail.value,
    });
  },
  tikiIDChange(e) {
    this.setData({
      tikiId: e.detail.value,
    });
  },
  onOpenProductDetail() {
    my.openScreen({
      screenCode: "TK_PRODUCT_DETAIL",
      params: { productId: this.data.productId },
      success: (res) => {
        console.log(res);
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
  onOpenFeed() {
    my.openScreen({
      screenCode: "TK_SOCIAL_FEED",
      success: (res) => {
        console.log(res);
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
  onOpenListing() {
    my.openScreen({
      screenCode: "TK_LISTING",
      success: (res) => {
        console.log(res);
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
  onOpenProfile() {
    my.openScreen({
      screenCode: "TK_PROFILE",
      params: { tikiid: this.data.tikiId },
      success: (res) => {
        console.log(res);
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
});
