import request from './request';
import shop from './mock/shop.json';
import categories from './mock/categories.json';
import featuredProducts from './mock/featured-products.json';
import newProducts from './mock/new-products.json';
import product from './mock/product-detail.json';
import user from './mock/user.json';
import numOrders from './mock/numOrders.json';
import orders from './mock/orders.json';
import cart from './mock/cart.json';
import coupons from './mock/coupons.json';
import order from './mock/order-detail.json';
import tracking from './mock/tracking-detail.json';
import point from './mock/my-point.json';
import banners from './mock/banners.json';
import hotDealProducts from './mock/hot-deal-products.json';
import subCategories from './mock/sub-categories.json';
import popularProducts from './mock/popular-products.json';

export const getShopInfoAPI = () => {
  return request(shop);
};

export const getCategoriesAPI = () => {
  return request(categories);
};

export const getFeaturedProductsAPI = () => {
  return request(featuredProducts);
};

export const getNewProductsAPI = () => {
  return request(newProducts);
};

export const getDetailProduct = () => {
  return request(product);
};

export const getUserInfo = () => {
  return request(user);
};

export const getNumOrders = () => {
  return request(numOrders);
};

export const getOrders = () => {
  return request(orders);
};

export const getCouponsAPI = () => {
  return request(coupons);
};

export const getCouponFromCodeAPI = (code) => {
  const isValid = Math.random() <= 0.7;
  return request({
    name: `${code} - Random value`,
    discount: isValid ? +((Math.random() * 100).toFixed(0) * 1000) : 0,
    isValid,
  });
};

export const getCartAPI = () => {
  return request(cart);
};

export const getOrderDetail = () => {
  return request(order);
};

export const getTrackingDetail = () => {
  return request(tracking);
};

export const getMyPoint = () => {
  return request(point);
};

export const getBannersAPI = () => {
  return request(banners);
};

export const getHotDealProductsAPI = () => {
  return request(hotDealProducts);
};

export const getSubCategoriesAPI = (id) => {
  return request(subCategories[id]);
};

export const getPopularProductsAPI = () => {
  return request(popularProducts);
};
