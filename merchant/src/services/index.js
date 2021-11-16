import request, { graphql } from './request';
import { appId } from '../utils/constant';

export const loginWithAuthCodeAPI = async ({ authCode = '' }) => {
  const query = `
    query login_with_auth_code($auth_code: String!, $app_id: String) {
      login_with_auth_code(auth_code: $auth_code, app_id: $app_id) {
        user {
          id,
          tiki_id,
          name,
          username,
        }
        access_token,
        refresh_token,
      }
    }
  `;

  const res = await graphql({
    query,
    variables: {
      auth_code: authCode,
      app_id: appId,
    },
  });

  return res.login_with_auth_code;
};

export const getShopInfoAPI = async ({ sellerId }) => {
  return request({
    path: `/merchant/profiles/${sellerId}`,
  });
};

export const getShopFollowersAPI = async ({ sellerId }) => {
  const res = await request({
    baseUrl: 'https://api.tiki.vn/social/openapi',
    path: '/interaction/following',
    params: {
      tiki_seller_id: sellerId,
    },
  });

  return {
    following: {
      total_follower: res.data.following.total_follower,
    },
    is_followed: res.data.is_followed,
  };
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
    path: '/merchant/banners',
    params: {
      group: 'home_banner_main_v2',
    },
  });

  return res.data;
};
