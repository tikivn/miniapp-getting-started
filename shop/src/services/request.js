import { delay } from '../utils/common';
const BASE_URL =
  'https://raw.githubusercontent.com/tikivn/miniapp-getting-started/main/shop/src/services/mock';

export const request = async ({ path, method = 'GET', headers = {}, data }) => {
  return new Promise((resolve, reject) => {
    my.request({
      url: `${BASE_URL}/${path}.json`,
      headers: {
        'Content-Type': 'application/json',
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

export const fakeRequest = async (res) => {
  await delay(300);
  return res;
};

export default request;
