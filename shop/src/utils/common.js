export const isHasValue = (value) =>
  value !== null && typeof value !== 'undefined';

export const isNotEmpty = (value) =>
  isHasValue(value) && (value + '').trim().length > 0;

export const moneyFormatter = (number, currency = 'đ') => {
  if (!isNotEmpty(number)) return '';
  return parseInt(number).toLocaleString('vi-VN') + currency;
};

export const delay = (milliseconds) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });

export const group = (arr, num) => {
  const result = arr.reduce((acc, _, idx) => {
    if (idx > 0 && idx % num === 0) acc.push(arr.slice(idx - num, idx));
    return acc;
  }, []);

  result.push(arr.slice(arr.length - (arr.length % num)));
  return result;
};
