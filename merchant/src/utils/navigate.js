import queryString from 'query-string';
import { getSystemInfo } from './system';

let isPreventUserNavigate = false;

export const navigate = ({ page, params = null }) => {
  if (isPreventUserNavigate) return;
  isPreventUserNavigate = true;

  my.navigateTo({
    url: `${queryString.stringifyUrl({
      url: `pages/${page}/index`,
      query: params,
    })}`,
  });

  setTimeout(() => {
    isPreventUserNavigate = false;
  }, 200);
};

export const switchTab = ({ page, params = null }) => {
  my.switchTab({
    url: `${queryString.stringifyUrl({
      url: `pages/${page}/index`,
      query: params,
    })}`,
  });
};

export const parseQuery = (query) => {
  return queryString.parse(query);
};

export const openDeeplink = async (link) => {
  const systemInfo = await getSystemInfo();
  const isAndroid = systemInfo.system === 'Android';
  const androidPrefix = 'tikivn://webview';
  const iosPrefix = 'tikivn://open-webpage';

  if (link.startsWith('https://') || link.startsWith('http://')) {
    const prefix = isAndroid ? androidPrefix : iosPrefix;
    return my.openDeeplink({
      url: `${prefix}?url=${link}`,
    });
  }

  if (link.startsWith(iosPrefix) && isAndroid)
    return my.openDeeplink({
      url: link.replace(iosPrefix, androidPrefix),
    });

  if (link.startsWith(androidPrefix) && !isAndroid)
    return my.openDeeplink({
      url: link.replace(androidPrefix, iosPrefix),
    });

  return my.openDeeplink({ url: link });
};
