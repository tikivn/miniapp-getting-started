import { getSystemInfo } from './system';

let ENV = null;

export const getBaseUrl = async () => {
  if (!ENV) {
    const { app } = await getSystemInfo();
    ENV = app === 'Tiki' ? 'prod' : 'dev';
  }

  return {
    dev: 'https://api.tala.xyz/tiniapp-open-api',
    prod: 'https://api.tiki.vn/tiniapp-open-api',
  }[ENV];
};
