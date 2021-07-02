const isHasValue = (value) => value !== null && value !== undefined;

const normalize = (text) => {
  return `${text}`
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
};

export const compareNormalize = (a, b) => {
  if (!isHasValue(a) || !isHasValue(b)) {
    return true;
  }
  const normalizeA = normalize(a).toLowerCase();
  const normalizeB = normalize(b).toLowerCase();
  return normalizeA.includes(normalizeB);
};
