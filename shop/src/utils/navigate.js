import queryString from 'query-string';

export const navigateToPDP = (productId, onAction) => {
  const pages = getCurrentPages();
  if (
    pages.length >= 2 &&
    pages[pages.length - 1].route === 'pages/detail/index'
  ) {
    onAction && onAction(productId);
  } else {
    my.navigateTo({ url: `pages/detail/index?product_id=${productId}` });
  }
};

export const loadBadgeCart = () => {
  const app = getApp();
  const { orderedProducts } = app.cart;
  my.addIconsToNavigationBar({
    icons: [
      {
        image: '/assets/images/ic-cart.png',
        width: orderedProducts.length ? 48 : 24,
        height: 24,
        badge: `${orderedProducts.length}`,
      },
    ],
    padding: 8,
    success: (res) => {
      console.log(res);
    },
    fail: (res) => {
      console.log(res);
    },
  });
};

export const navigateWithParams = ({ page, params = null }) => {
  let formattedParams = null;
  if (params) {
    formattedParams = Object.entries(params).reduce((acc, [key, value]) => {
      acc[key] = encodeURIComponent(value);
      return acc;
    }, {});
  }

  my.navigateTo({
    url: `${queryString.stringifyUrl({
      url: `pages/${page}/index`,
      query: formattedParams,
    })}`,
  });
};
