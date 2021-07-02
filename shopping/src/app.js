import EventEmitter from "./utils/event";

App({
  authEvent: new EventEmitter(),
  auth: null,
  cart: {
    totalPrice: 0,
    count: 0,
    products: [],
  },
  onAppAddCart(product) {
    const index = this.cart.products.findIndex((p) => p.id === product.id);
    if (index > -1) {
      this.cart.products[index].total += 1;
    } else {
      this.cart.products.push({ ...product, total: 1 });
    }
    this.cart.totalPrice += product.price;
    this.cart.count += 1;
  },
});
