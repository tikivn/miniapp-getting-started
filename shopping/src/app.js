import EventEmitter from "./utils/event";

const initCart = () => ({
  totalPrice: 0,
  count: 0,
  products: [],
});
App({
  authEvent: new EventEmitter(),
  refreshEvent: new EventEmitter(),
  addressEvent: new EventEmitter(),
  auth: null,
  address: null,
  quotes: null,
  initCart,
  cart: initCart(),
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
