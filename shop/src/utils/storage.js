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
