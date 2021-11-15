import myx from '../utils/myx';

let systemInfo = null;
let getSystemInfoPromise = null;

const _getSystemInfo = async () => {
  const keys = ['app', 'windowHeight'];
  if (systemInfo) return systemInfo;
  systemInfo = await myx.getSystemInfo(keys);
  return systemInfo;
};

export const getSystemInfo = async () => {
  if (!getSystemInfoPromise) getSystemInfoPromise = _getSystemInfo();
  return getSystemInfoPromise;
};

export { systemInfo };
