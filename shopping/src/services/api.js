const app = getApp();

const request = async (url, { method, data } = {}) => {
  const token = app.auth && app.auth.authToken;

  return new Promise((resolve, reject) => {
    my.request({
      url,
      method,
      data,
      headers: {
        "Content-Type": "application/json",
        "X-App-Identifier": "com.gettingstarted.shopping",
        "User-Agent": "TikiNative",
        ...(token ? { "X-Access-Token": token } : {}),
      },
      success: (res) => {
        console.log("API Success :>> ", res);
        resolve(res);
      },
      fail(e) {
        console.log(`Error ${url}`, e);
        reject(e);
      },
    });
  });
};

export const get = async (url, { token } = {}) =>
  request(url, { method: "GET", token });

export const post = async (url, { data, token } = {}) =>
  request(url, { method: "POST", data, token });
