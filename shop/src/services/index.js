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
import products from './mock/products.json';
import otherProducts from './mock/other-products.json';
import relativeProducts from './mock/relative-products.json';
import filters from './mock/filters.json';
import sorts from './mock/sorts.json';

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

export const getDetailProduct = (productId) => {
  const pdb = products.find((p) => p.id === productId);
  const discount = pdb.discountRate
    ? {
        listPrice: pdb.price / ((100 - pdb.discountRate) / 100.0),
      }
    : {};
  const result = {
    ...product,
    ...pdb,
    ...discount,
  };
  return request(result);
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

export const getProductsByCategoryIdAPI = (categoryId) => {
  return request(products);
};

export const getFiltersAPI = () => {
  return request(filters);
};

export const getSortsAPI = () => {
  return request(sorts);
};

export const filterSortProductsAPI = ({ filters, sort, search = '' }) => {
  let result = [...products];

  if (filters.priceOption)
    switch (filters.priceOption.value) {
      case '1':
        result = result.filter((item) => item.price < 100000);
        break;
      case '2':
        result = result.filter(
          (item) => item.price >= 100000 && item.price <= 200000,
        );
        break;
      case '3':
        result = result.filter(
          (item) => item.price >= 200000 && item.price <= 750000,
        );
        break;
      case '4':
        result = result.filter((item) => item.price > 750000);
        break;
    }

  if (filters.priceRange && filters.priceRange.start && filters.priceRange.end)
    result = result.filter(
      (item) =>
        item.price >= filters.priceRange.start.value &&
        item.price <= filters.priceRange.end.value,
    );

  if (sort)
    switch (sort.value) {
      case '1':
        break;
      case '2':
        result.sort((a, b) => b.id - a.id);
        break;
      case '3':
        result.sort((a, b) => a.price - b.price);
        break;
      case '4':
        result.sort((a, b) => b.price - a.price);
        break;
    }
  let finalResults = result;
  if (search) finalResults = result.filter((p) => p.name.includes(search));
  return request(finalResults);
};

export const getOtherProductsAPI = () => {
  return request(otherProducts);
};

export const getRelativeProductsAPI = () => {
  return request(relativeProducts);
};
