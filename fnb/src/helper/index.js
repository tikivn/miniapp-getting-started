/* eslint-disable prefer-rest-params */
export const priceFormat = (p) => {
  if (!p || !p.length) return '0';
  const str = p + '';
  const rm = p.length % 3;
  let rs = '';
  for (let i = 1; i < p.length; i++) {
    rs += str[i];
    rm = rm - 1;
    if (rm % 3 === 0) rs += '.';
  }
  return rs;
};

export const delay = (time) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, time),
  );
};

export function debounce(fn, ms) {
  let timer;

  return function () {
    const args = arguments;
    const context = this;

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, ms);
  };
}

export const navigateTo = (pageName, query = null) => {
  let queryStr = '';
  if (query) queryStr = objToQuery(query);
  my.navigateTo({ url: `pages/${pageName}/index?${queryStr}` });
};

export const redirectTo = (pageName, query = null) => {
  let queryStr = '';
  if (query) queryStr = objToQuery(query);
  my.redirectTo({ url: `pages/${pageName}/index?${queryStr}` });
};

export function objToQuery(obj) {
  let rs = '';
  for (const [key, value] of Object.entries(obj)) rs += `${key}=${value}&`;
  return rs;
}

export function queryToObj(str) {
  str = decodeURIComponent(str);
  if (!str || typeof str !== 'string') return {};
  return str.split('&').reduce((pre, v) => {
    const [key, value] = v.split('=');
    pre[key] = value;
    return pre;
  }, {});
}

export const getStorage = (key) => {
  return new Promise((resolve, reject) => {
    my.getStorage({
      key,
      success: (res) => resolve(res.data),
      fail: (fail) => reject(fail),
    });
  });
};

export const setStorage = (key, data) => {
  return new Promise((resolve, reject) => {
    my.setStorage({
      key,
      data,
      success: (res) => {
        resolve(res);
      },
      fail: (fail) => {
        reject(fail);
      },
    });
  });
};

export const deepEqual = (object1, object2, ignoreKeys = []) => {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  // dont need to compare ignored keys
  keys1 = keys1.filter((v) => ignoreKeys.indexOf(v) === -1);
  keys2 = keys2.filter((v) => ignoreKeys.indexOf(v) === -1);

  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !deepEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }
  return true;
};
function isObject(object) {
  return object != null && typeof object === 'object';
}
export const removeAccents = (str) => {
  const AccentsMap = [
    'aàảãáạăằẳẵắặâầẩẫấậ',
    'AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ',
    'dđ',
    'DĐ',
    'eèẻẽéẹêềểễếệ',
    'EÈẺẼÉẸÊỀỂỄẾỆ',
    'iìỉĩíị',
    'IÌỈĨÍỊ',
    'oòỏõóọôồổỗốộơờởỡớợ',
    'OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ',
    'uùủũúụưừửữứự',
    'UÙỦŨÚỤƯỪỬỮỨỰ',
    'yỳỷỹýỵ',
    'YỲỶỸÝỴ',
  ];
  for (let i = 0; i < AccentsMap.length; i++) {
    let re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
    let char = AccentsMap[i][0];
    str = str.replace(re, char);
  }
  return str;
};

export function formatWLength(v, l) {
  let rs = '' + v;
  while (rs.length < l) {
    rs = '0' + rs;
  }
  return rs;
}

export function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function showToast(
  content = '',
  duration = 1000,
  type = 'success',
  buttonText = '',
) {
  my.showToast({
    type,
    content,
    buttonText,
    duration,
  });
}
