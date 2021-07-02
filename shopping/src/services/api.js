const request = async (url, { method, data, token } = {}) => {
  console.log("API url :>> ", url);
  console.log("API token :>> ", token);
  console.log("API data :>> ", data);
  return new Promise((resolve, reject) => {
    my.request({
      url,
      method,
      data,
      headers: {
        "Content-Type": "application/json",
        "X-App-Identifier": "com.gettingstarted.shopping",
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
