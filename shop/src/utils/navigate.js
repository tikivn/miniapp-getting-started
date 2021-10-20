import queryString from 'query-string';

export const navigateToPDP = (productId) => {
  my.navigateTo({ url: `pages/detail/index?product_id=${productId}` });
};

export const navigateToCart = () => {
  const pages = getCurrentPages();
  if (
    pages.length >= 2 &&
    pages[pages.length - 2].route === 'pages/cart/index'
  ) {
    my.navigateBack();
  } else {
    my.navigateTo({ url: `pages/cart/index` });
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
  my.navigateTo({
    url: `${queryString.stringifyUrl({
      url: `pages/${page}/index`,
      query: params,
    })}`,
  });
};
