import myx from "./myx";

export const getAuth = async () => {
  try {
    const token = await myx.getUserToken({ openLogin: true });
    return {
      ...token,
    };
  } catch (err) {
    return null;
  }
};

export const refreshToken = async () => {
  try {
    const token = await myx.refreshUserToken();
    return {
      ...token,
    };
  } catch (err) {
    return null;
  }
};
