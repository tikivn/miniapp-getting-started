import request from './request';

import shop from './mock/shop.json';
import categories from './mock/categories.json';
import products from './mock/products.json';
import cart from './mock/cart.json';
import coupons from './mock/coupons.json';

export const getShopInfoAPI = () => {
  return request(shop);
};

export const getCategoriesAPI = () => {
  return request(categories);
};

export const getFeaturedProductsAPI = () => {
  return request(products);
};

export const getNewProductsAPI = () => {
  return request(products);
};

export const getCouponsAPI = () => {
  return request(coupons);
};

export const getCouponFromCodeAPI = (code) => {
  const isValid = Math.random() <= 0.7;
  return request({
    name: `${code} - Random coupon`,
    discount: isValid ? +((Math.random() * 100).toFixed(0) * 1000) : 0,
    isValid,
  });
};

export const getCartAPI = () => {
  return request(cart);
};
