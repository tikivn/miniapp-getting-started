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
  return queryString.parse(query, { parseBooleans: true });
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

export const goToProductDetail = ({ product, page }) => {
  openDeeplink(
    `tikivn://products/${product.id}?spid=${product.seller_product_id}&itm_source=tiniapp&itm_medium=CPC&itm_campaign=TNA_NPD_TKS_APP_APP_APP_UNK_TNA_UNK_UNK_LD01_CPC_UNK_UNK_Z.vn.tiki.tini.brand_CN.pages/${page}/index`,
  );
};

export const showCart = (icon = '') => {
  my.addIconsToNavigationBar({
    icons: [
      {
        image: icon || '/assets/icons/cart.png',
        width: 24,
        height: 24,
      },
    ],
    padding: 8,
  });
};
