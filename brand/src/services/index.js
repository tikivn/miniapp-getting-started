import request from './request';

export const getProductsAPI = async ({
  page = 1,
  limit = 10,
  sort,
  filter,
  search,
  ...rest
}) => {
  const res = await request({
    baseUrl: 'https://tiki.vn/api/v2',
    path: '/products',
    params: {
      aggregations: 2,
      page,
      limit,
      sort,
      q: search,
      ...filter,
      ...rest,
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
      seller_id: sellerId,
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
    baseUrl: 'https://tiki.vn/api/shopping/v2',
    path: '/banners',
    params: {
      group: 'home_banner_main_v2',
    },
  });

  return res.data;
};
