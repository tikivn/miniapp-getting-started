export const search = (arr, value) => {
  return arr.filter(
    (v) =>
      v.name.toLowerCase().includes(`${value}`.toLowerCase().trim()) ||
      v.address.toLowerCase().includes(`${value}`.toLowerCase().trim()),
  );
};
