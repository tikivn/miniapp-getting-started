export const ratioToPercent = (ratio) => {
  if (!ratio) return 0;

  const [widthRatio, heightRatio] = ratio
    .split(':')
    .map((item) => parseInt(item.trim()));

  return (heightRatio / widthRatio) * 100;
};
