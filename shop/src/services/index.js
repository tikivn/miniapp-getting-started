import request, { fakeRequest } from './request';

export const getShopInfoAPI = () => {
  return request({ path: '/shop' });
};

export const getCategoriesAPI = () => {
  return request({ path: '/categories' });
};

export const getFeaturedProductsAPI = () => {
  return request({ path: '/featured-products' });
};

export const getNewProductsAPI = () => {
  return request({ path: '/new-products' });
};

export const getDetailProduct = async (productId) => {
  const [products, productDetail] = await Promise.all([
    request({ path: '/products' }),
    request({ path: '/product-detail' }),
  ]);
  const pdb = products.find((p) => p.id == productId);
  const result = {
    ...productDetail,
    ...pdb,
  };
  return result;
};

export const getUserInfo = () => {
  return request({ path: '/user' });
};

export const getNumOrders = () => {
  return request({ path: '/num-orders' });
};

export const getOrders = () => {
  return request({ path: '/orders' });
};

export const getCouponsAPI = () => {
  return request({ path: '/coupons' });
};

export const getCouponFromCodeAPI = (code) => {
  const isValid = Math.random() <= 0.7;
  return fakeRequest({
    name: `${code} - Random value`,
    discount: isValid ? +((Math.random() * 100).toFixed(0) * 1000) : 0,
    isValid,
  });
};

export const getCartAPI = () => {
  return request({ path: '/cart' });
};

export const getOrderDetail = () => {
  return request({ path: '/order-detail' });
};

export const getTrackingDetail = () => {
  return request({ path: '/tracking-detail' });
};

export const getMyPoint = () => {
  return request({ path: '/my-point' });
};

export const getBannersAPI = () => {
  return request({ path: '/banners' });
};

export const getHotDealProductsAPI = () => {
  return request({ path: '/hot-deal-products' });
};

export const getSubCategoriesAPI = async (id) => {
  const subCategories = await request({ path: '/sub-categories' });
  return subCategories[id];
};

export const getPopularProductsAPI = () => {
  return request({ path: '/popular-products' });
};

export const getProductsByCategoryIdAPI = () => {
  return request({ path: '/products' });
};

export const getFiltersAPI = () => {
  return request({ path: '/filters' });
};

export const getSortsAPI = () => {
  return request({ path: '/sorts' });
};

export const filterSortProductsAPI = async ({ filters, sort, search = '' }) => {
  const products = await request({ path: '/products' });
  let result = [...products];

  if (filters.priceOption)
    switch (filters.priceOption.value) {
      case '1':
        result = result.filter((item) => item.price < 100000);
        break;
      case '2':
        result = result.filter(
          (item) => item.price >= 100000 && item.price <= 200000
        );
        break;
      case '3':
        result = result.filter(
          (item) => item.price >= 200000 && item.price <= 750000
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
        item.price <= filters.priceRange.end.value
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

  if (search) result = result.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
  return result;
};

export const getOtherProductsAPI = () => {
  return request({ path: '/other-products' });
};

export const getRelativeProductsAPI = () => {
  return request({ path: '/relative-products' });
};
