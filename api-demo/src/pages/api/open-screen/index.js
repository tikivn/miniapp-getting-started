Page({
  data: {
    productId: undefined,
    tikiId: undefined,
    slug: undefined,
  },
  productIdChange(e) {
    this.setData({
      productId: e.detail.value,
    });
  },
  slugChange(e) {
    this.setData({
      slug: e.detail.value,
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
  onOpenSellerStore() {
    my.openScreen({
      screenCode: "TK_SELLER_STORE",
      params: { slug: this.data.slug },
      success: (res) => {
        console.log(res);
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
  onOpenCart() {
    my.openScreen({
      screenCode: "TK_CART",
      success: (res) => {
        console.log(res);
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
});
