export const formatMoney = (value, showCurrency = true) => {
  const number = String(`${value}`).replace(/(.)(?=(\d{3})+$)/g, "$1.");
  return (number || 0) + (showCurrency ? " ₫" : "");
};
