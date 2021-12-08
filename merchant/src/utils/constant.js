export const appId = 'vn.tiki.tini.merchant';

export const defaultSorts = [
  {
    label: 'Chọn lọc',
    value: null,
  },
  {
    label: 'Mới nhất',
    value: 'newest',
  },
  {
    label: 'Bán chạy',
    value: 'order_desc',
  },
  {
    label: 'Giảm giá nhiều',
    value: 'discount_desc',
  },
  {
    label: 'Giá thấp',
    value: 'price_asc',
  },
  {
    label: 'Giá cao',
    value: 'price_desc',
  },
];

export const LOADING_STATUS = {
  INITIAL: 'INITIAL',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  LOAD_MORE: 'LOAD_MORE',
  ERROR: 'ERROR',
};
