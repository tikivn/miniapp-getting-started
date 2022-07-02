let isShowDotData = false;

export const loadCartIcon = ({ isShowDot }) => {
  if (typeof isShowDot === 'undefined') {
    isShowDot = isShowDotData;
  }

  isShowDotData = isShowDot;

  const size = isShowDot ? 26 : 23;
  const padding = isShowDot ? 6 : 10;
  my.addIconsToNavigationBar({
    icons: [
      {
        image: `/assets/icons/cart${isShowDot ? '-with-dot' : ''}.png`,
        width: size,
        height: size,
      },
    ],
    padding,
  });
};
