export const nFormatter = (n, digits = 0, withPlus = true) => {
  if (n < 1e3) return n + `${withPlus ? '+' : ''}`;
  if (n >= 1e3 && n < 1e6)
    return +(n / 1e3).toFixed(digits) + 'k' + `${withPlus ? '+' : ''}`;
  if (n >= 1e6 && n < 1e9)
    return +(n / 1e6).toFixed(digits) + 'M' + `${withPlus ? '+' : ''}`;
  if (n >= 1e9 && n < 1e12)
    return +(n / 1e9).toFixed(digits) + 'B' + `${withPlus ? '+' : ''}`;
  if (n >= 1e12)
    return +(n / 1e12).toFixed(digits) + 'T' + `${withPlus ? '+' : ''}`;
};
