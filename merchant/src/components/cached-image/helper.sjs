export const formatCachedUrl = ({ url, cacheWidth }) => {
  const cachePos = url.indexOf('/cache');
  if (cachePos === -1) {
    return url.replace('tikicdn.com', 'tikicdn.com/cache/w' + cacheWidth);
  }

  const splittedUrl = url.split('/');
  for (let i = 0; i < splittedUrl.length; i++) {
    if (splittedUrl[i - 1] === 'cache') splittedUrl[i] = 'w' + cacheWidth;
  }

  return splittedUrl.join('/');
};
