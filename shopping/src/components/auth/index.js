import myx from "tiki-miniapp-tnx/src/myx";

import { post } from "../../services/api";

const app = getApp();

const API_URL = "https://miniapp-demo.tala.xyz";

const AUTH_STATUS = {
  INITIAL: "INITIAL",
  FAIL: "FAIL",
  SUCCESS: "SUCCESS",
  LOADING: "LOADING",
};

Component({
  data: {
    authStatus: AUTH_STATUS,
    status: AUTH_STATUS.INITIAL,
  },
  async onInit() {
    if (app.auth) {
      this.setData({ status: AUTH_STATUS.SUCCESS });
      return;
    }

    await this.checkAuth();
  },
  methods: {
    async checkAuth() {
      try {
        this.setData({ status: AUTH_STATUS.LOADING });
        const auth = {
          authCode: null,
          user: null,
          authToken: null,
          tikiAccessToken: null,
          user: null,
        };

        // Get AuthCode
        const authCode = await myx.getAuthCode();
        auth.authCode = authCode.authCode;

        // Get token
        const token = await post(`${API_URL}/token`, {
          data: { auth_code: auth.authCode },
        });

        auth.authToken = token.data.access_token;
        auth.tikiAccessToken = token.data.tiki_access_token;
        auth.user = token.data.user;

        this.setData({ status: AUTH_STATUS.SUCCESS });
        app.auth = auth;
        app.authEvent.emit("auth/success");
      } catch (error) {
        console.log("Auth Error :>> ", error);
        app.authEvent.emit("auth/fail");
        this.setData({ status: AUTH_STATUS.FAIL });
      }
    },
  },
});
