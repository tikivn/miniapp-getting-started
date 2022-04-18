export const splitStoreArray = (arr) => {
  return arr.reduce(
    (pre, v) => {
      if (v.favorite) pre.favorite.push(v);
      else pre.other.push(v);
      return pre;
    },
    {
      favorite: [],
      other: [],
    }
  );
};
