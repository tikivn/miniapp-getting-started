export const search = (arr, name) => {
  return arr.filter((v) =>
    v.name.toLowerCase().includes(`${name}`.toLowerCase().trim())
  );
};
export const getPoppularProduct = (arr) => {
  return arr.filter((v, i) => i < 6);
};
