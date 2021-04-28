import { useMemo } from 'react';

const truncate = (number, digits = 1) => {
  const d = 10 ** digits;
  return (parseInt(number * d, 10) / d).toFixed(digits);
};

const useKFormat = (n) => {
  if (isNaN(n)) {
    return 0;
  }
  const labels = {
    K: 'K',
    M: 'M',
    B: 'B',
    T: 'T',
    seperator: ',',
  };
  let rs = '';

  if (n < 1e3) {
    rs = `${n}`;
  } else if (n >= 1e3 && n < 1e6) {
    rs = `${truncate(+(n / 1e3), 1)}${labels.K}`;
  } else if (n >= 1e6 && n < 1e9) {
    rs = `${truncate(+(n / 1e6), 1)}${labels.M}`;
  } else if (n >= 1e9 && n < 1e12) {
    rs = `${truncate(+(n / 1e9), 1)}${labels.B}`;
  } else {
    rs = `${truncate(+(n / 1e12), 1)}${labels.T}`;
  }
  return rs.replace('.', labels.seperator);
};

export default useKFormat;
