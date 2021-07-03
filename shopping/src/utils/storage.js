import myx from "tiki-miniapp-tnx/src/myx";

const app = getApp();

const getKeyByUser = (keyName) => {
  const userId =
    (app.auth && app.auth.user && app.auth.user.tiki_user_id) || "";
  return `${userId}_${keyName}`;
};

export const getAddress = async () => {
  const data = await myx.getStorage({ key: getKeyByUser("address") });
  return Promise.resolve((data && data.data) || []);
};

export const setAddress = async (data) => {
  const key = getKeyByUser("address");
  let address = await getAddress();
  const existedIndex = address.findIndex((i) => i.id === data.id);
  if (existedIndex > -1) {
    address[existedIndex] = data;
    return myx.setStorage({ key, data: address });
  }
  address.push(data);
  return myx.setStorage({ key, data: address });
};

export const getRecentAddress = async () => {
  const data = await myx.getStorage({
    key: getKeyByUser("recent_address"),
  });
  return Promise.resolve((data && data.data) || null);
};

export const setRecentAddress = async (data) =>
  myx.setStorage({ key: getKeyByUser("recent_address"), data });
