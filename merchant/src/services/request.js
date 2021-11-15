import { getBaseUrl, getGraphqlBaseUrl } from '../utils/base-url';
import { appId } from '../utils/constant';
import queryString from 'query-string';

export const request = async ({
  path = '',
  method = 'GET',
  headers = {},
  params = null,
  baseUrl,
  data,
}) => {
  const defaultBaseUrl = await getBaseUrl();

  return new Promise((resolve, reject) => {
    my.request({
      url: `${queryString.stringifyUrl(
        {
          url: `${baseUrl || defaultBaseUrl}${path}`,
          query: params,
        },
        { skipNull: true },
      )}`,
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': appId,
        ...headers,
      },
      method,
      data,
      success: (res) => {
        resolve(res);
      },
      fail: (err) => {
        reject(err);
      },
    });
  });
};

export const graphql = async ({
  baseUrl,
  query,
  variables,
  token = '',
  headers = {},
}) => {
  const defaultBaseUrl = await getGraphqlBaseUrl();

  return new Promise((resolve, reject) => {
    my.request({
      url: baseUrl || defaultBaseUrl,
      headers: {
        'Content-Type': 'application/json',
        'x-social-access-token': token,
        ...headers,
      },
      method: 'POST',
      data: {
        query,
        variables,
      },
      success: (res) => {
        if (res.errors && res.errors.length) reject(res.errors);
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      },
    });
  });
};

export default request;
