export const isHasValue = (value) =>
  value !== null && typeof value !== 'undefined';

export const isNotEmpty = (value) =>
  isHasValue(value) && (value + '').trim().length > 0;

export const group = (arr, num = 8) => {
  if (arr && arr.length)
    return arr.reduce((acc, _, idx) => {
      if (idx % num === 0) acc.push(arr.slice(idx, idx + num));
      return acc;
    }, []);

  return [];
};

export const moneyFormatter = (number, currency = ' ₫') => {
  if (!isNotEmpty(number)) return '';
  return parseInt(number).toLocaleString('vi-VN') + currency;
};

export const parseNumberFromMoney = (money) => {
  if (!isNotEmpty(money)) return '';
  return +[...money.toString()]
    .filter((char) => char <= '9' && char >= '0')
    .join('');
};

export const copy = (object) => JSON.parse(JSON.stringify(object));

export const isObjectEqual = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

export const delay = (milliseconds) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
