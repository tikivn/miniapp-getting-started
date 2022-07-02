import request from './request';

export const getShopInfoAPI = async ({ sellerId }) => {
  return request({
    path: `/merchant/profiles/${sellerId}`,
  });
};

export const getCategoriesAPI = async ({ sellerId, parentId }) => {
  const res = await request({
    path: '/merchant/categories',
    params: {
      seller_id: sellerId,
      parent_id: parentId,
    },
  });

  return res.data;
};

export const getProductsAPI = async ({
  cursor = 0,
  limit = 0,
  sellerId,
  categoryId,
  sort,
}) => {
  const res = await request({
    path: `/merchant/collections/${categoryId ? '5' : '6'}/products`,
    headers: {
      'x-source': 'local',
    },
    params: {
      seller_id: sellerId,
      category: categoryId,
      cursor,
      limit,
      sort,
    },
  });

  return res;
};

export const getProductsSearchAPI = async ({
  sellerId = 0,
  limit = 6,
  keyword = '',
  sort = 'default',
  page = 1,
}) => {
  const res = await request({
    path: `merchant/products`,
    params: {
      aggregations: '1',
      seller: sellerId,
      q: keyword,
      sort,
      page,
      limit,
    },
  });
  const next_page =
    res.paging.current_page < res.paging.last_page
      ? res.paging.current_page + 1
      : null;

  return {
    data: res.data,
    next_page,
  };
};

export const getBannersAPI = async () => {
  const res = await request({
    path: '/merchant/banners',
    params: {
      group: 'home_banner_main_v2',
    },
  });

  return res.data;
};

export const getProductDetails = async ({ id, spid }) => {
  const res = await request({
    baseUrl: 'https://tiki.vn/api/v2',
    path: `/products/${id}`,
    params: {
      spid,
    },
  });

  return res;
};
