import myx from "tiki-miniapp-tnx/src/myx";

import makeGraphQLRequest from "../../services/index";

const app = getApp();

const API_URL = "https://miniapp-demo.tala.xyz";

export async function post(path, { data, token }) {
  console.log("data", data);
  console.log("token", token);

  return new Promise((resolve, reject) => {
    try {
      my.request({
        url: `${API_URL}/${path}`,
        data: data,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-App-Identifier": "com.gettingstarted.shopping",
          "X-Access-Token": token,
        },
        success: (res) => {
          console.log("res", res);
          resolve(res);
        },
        fail(e) {
          console.log("path", e);
          reject(e);
        },
      });
    } catch (error) {
      console.log("path", error);
      reject(error);
    }
  });
}
Page({
  data: {
    cart: app.cart,
  },
  async prepForPayment() {
    const app = {};
    const auth = await myx.getAuthCode();
    console.log("auth", auth);
    app.authCode = auth.authCode;
    const res = await post("token", {
      data: { auth_code: auth.authCode },
    });
    console.log("ressssssssss", res);
    app.authToken = await res.data.access_token;
    app.tikiAccessToken = await res.data.tiki_access_token;
    app.user = await res.data.user;
    console.log(app);
  },
  async onLoad() {
    await this.prepForPayment();
  },
  onShow() {
    this.setData({ cart: app.cart });
  },
  doPayment() {},
});
