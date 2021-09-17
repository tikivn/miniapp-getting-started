export const isHasValue = (value) =>
  value !== null && typeof value !== "undefined";

export const isNotEmpty = (value) =>
  isHasValue(value) && (value + "").trim().length > 0;

export const moneyFormatter = (number, currency = " ₫") => {
  if (!isNotEmpty(number)) return "";
  return parseInt(number).toLocaleString("vi-VN") + currency;
};

export const nFormatter = (n, digits = 0, withPlus = true) => {
  if (n < 1e3) return n + `${withPlus ? "+" : ""}`;
  if (n >= 1e3 && n < 1e6)
    return +(n / 1e3).toFixed(digits) + "k" + `${withPlus ? "+" : ""}`;
  if (n >= 1e6 && n < 1e9)
    return +(n / 1e6).toFixed(digits) + "M" + `${withPlus ? "+" : ""}`;
  if (n >= 1e9 && n < 1e12)
    return +(n / 1e9).toFixed(digits) + "B" + `${withPlus ? "+" : ""}`;
  if (n >= 1e12)
    return +(n / 1e12).toFixed(digits) + "T" + `${withPlus ? "+" : ""}`;
};

export const statusFormatter = (status) => {
  let statusFormat = status;
  switch (status) {
    case "delivered":
      statusFormat = "Delivered";
      break;
    case "shipping":
      statusFormat = "Shipping";
      break;
    case "processing":
      statusFormat = "Processing";
      break;
    case "waiting":
      statusFormat = "Waiting for payment";
      break;
    case "canceled":
      statusFormat = "Canceled";
      break;
  }
  return statusFormat;
};
