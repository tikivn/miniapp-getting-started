import { getSystemInfo } from './system';

let ENV = 'prod';

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

export const getGraphqlBaseUrl = async () => {
  if (!ENV) {
    const { app } = await getSystemInfo();
    ENV = app === 'Tiki' ? 'prod' : 'dev';
  }

  return {
    dev: 'https://api.tala.xyz/tiniapp-open-api',
    prod: 'https://api.tiki.vn/tiniapp-open-api',
  }[ENV];
};
