export const group = (arr, num = 8) => {
  return arr.reduce((acc, _, idx) => {
    if (idx % num === 0) acc.push(arr.slice(idx, idx + num));
    return acc;
  }, []);
};

export const isEqual = (obj1, obj2) =>
  JSON.stringify(obj1) === JSON.stringify(obj2);
