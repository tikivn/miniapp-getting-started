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

export const loadBadgeCart = (ic = '') => {
  const app = getApp();
  const { orderedProducts } = app.cart;
  const total = orderedProducts.length
    ? orderedProducts.reduce((acc, curr) => acc + curr.quantity, 0)
    : undefined;
  const image = ic ? ic : '/assets/images/ic-cart.png';
  const size = ic ? 32 : 24;
  my.addIconsToNavigationBar({
    icons: [
      {
        image: image,
        width: orderedProducts.length ? 48 : size,
        height: size,
        badge: '' + total,
      },
    ],
    padding: 8,
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
