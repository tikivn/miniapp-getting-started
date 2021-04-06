const app = getApp();

Page({
  data: {
    cart: app.cart,
  },
  onShow() {
    this.setData({ cart: app.cart });
  }
})
