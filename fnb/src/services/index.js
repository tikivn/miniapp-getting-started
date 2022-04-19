import { delay, clone } from '../helper';

import { buyer } from './data/buyer';
import { orders } from './data/orders';
import { stores } from './data/stores';
import { coupons } from './data/coupons';
import { banners } from './data/banners';
import { products } from './data/products';
import { campaigns } from './data/campaigns';
import { categories } from './data/categories';
import { reservations } from './data/reservations';

const data = {
  buyer,
  orders,
  stores,
  coupons,
  banners,
  products,
  campaigns,
  categories,
  reservations,
};

export const getData = async (name) => {
  await delay(500);
  return clone(data[name]);
};

export const getDataInstant = (name) => {
  return clone(data[name]);
};

export const getDataById = async (from, id) => {
  await delay(500);
  if (!data[from]) return {};
  const selected = data[from].filter((v) => v._id === id)[0];
  if (!selected) return {};
  return clone(selected);
};
