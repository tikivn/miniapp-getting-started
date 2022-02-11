import { getBaseUrl } from '../utils/base-url';
import { appId } from '../utils/constant';
import queryString from 'query-string';
import { getBrand } from '../utils/brand';

export const request = async ({
  path = '',
  method = 'GET',
  headers = {},
  params = null,
  baseUrl,
  data,
}) => {
  const [defaultBaseUrl, brand] = await Promise.all([getBaseUrl(), getBrand()]);

  return new Promise((resolve, reject) => {
    my.request({
      url: `${queryString.stringifyUrl(
        {
          url: `${baseUrl || defaultBaseUrl}${path}`,
          query: { ...params, brand: brand.query_value },
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

export default request;
