const request = async (url, { method, data, token } = {}) => {
  return new Promise((resolve, reject) => {
    my.request({
      url,
      method,
      data,
      headers: {
        "Content-Type": "application/json",
        "X-App-Identifier": "com.gettingstarted.shopping",
        "X-Access-Token": token,
      },
      success: (res) => {
        resolve(res);
      },
      fail(e) {
        console.log("Error", e);
        reject(e);
      },
    });
  });
};

export const get = async (url, { token } = {}) =>
  request(url, { method: "GET", token });

export const post = async (url, { data, token } = {}) =>
  request(url, { method: "POST", data, token });
