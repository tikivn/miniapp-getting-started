export const isHasValue = (value) =>
  value !== null && typeof value !== 'undefined';

export const isNotEmpty = (value) =>
  isHasValue(value) && (value + '').trim().length > 0;

export const priceFormat = (number, currency = ' ₫') => {
  if (!isNotEmpty(number)) return '';
  return parseInt(number).toLocaleString('vi-VN') + currency;
};

export function nameFormatAttributes(p) {
  let rs = p.name + ': ';
  rs += getAttributeText(p.selectedAttributes);
  return rs;
}

export function nameFormat(arr) {
  let rs = '';
  for (let i = 0; i < arr.length; i++) {
    rs += arr[i].name;
    rs += ` (x${arr[i].number})`;
    if (i < arr.length - 1) rs += ', ';
  }
  return rs;
}

export function getAllAttributeText(arr) {
  let rs = '';
  for (let i = 0; i < arr.length; i++) {
    rs += arr[i].name + ':';
    for (let j = 0; j < arr[i].values.length; j++) {
      rs += arr[i].values[j];
      if (j < arr[i].values.length - 1) rs += ', ';
    }
  }
  return rs;
}
export function getAttributeText(a) {
  let rs = a.name + ': ';
  for (let j = 0; j < a.values.length; j++) {
    rs += a.values[j];
    if (j < a.values.length - 1) rs += ', ';
  }
  return rs;
}

export const getSelectedAttributes = (arr) =>
  arr.selectedAttributes.map((a) =>
    a.values.reduce(
      (pre, v, i, vs) => pre + v + (i < vs.length - 1 ? ', ' : ''),
      `${a.name}: `,
    ),
  );
