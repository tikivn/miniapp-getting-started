import queryString from 'query-string';
import { appId } from '../utils/constant';

const brandName = getApp().brandName;
let brand = null;
let getBrandPromise = null;

export const getBrandByNameAPI = async () => {
  return new Promise((resolve, reject) => {
    my.request({
      url: `${queryString.stringifyUrl({
        url: 'https://tiki.vn/api/v2/brands',
        query: { slug: brandName },
      })}`,
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': appId,
      },
      success: (res) => {
        resolve(res.data[0]);
      },
      fail: (err) => {
        reject(err);
      },
    });
  });
};

const _getBrand = async () => {
  try {
    if (brand) return brand;
    brand = await getBrandByNameAPI({ brandName });

    return brand;
  } catch {}
};

export const getBrand = async () => {
  if (!getBrandPromise) getBrandPromise = _getBrand();
  return getBrandPromise;
};

export { brand };
