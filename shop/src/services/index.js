import request from './request';

import shop from './mock/shop.json';
import categories from './mock/categories.json';
import products from './mock/products.json';

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
