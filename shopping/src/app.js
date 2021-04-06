App({
  cart: {
    totalPrice: 0,
    products: []
  },
  onAppAddCart(product) {
    const index = this.cart.products.findIndex(p => p.id === product.id);
    if (index > -1) {
      this.cart.products[index].total += 1;
    } else {
      this.cart.products.push({ ...product, total: 1 });
    }
    this.cart.totalPrice += product.price;
  },
  onLaunch(options) {
    console.log('App onLaunch');
  },
  onShow(options) {
    console.log('App onShow')
  },
  onLoad() {
    console.log('App onLoad')
  }
});
