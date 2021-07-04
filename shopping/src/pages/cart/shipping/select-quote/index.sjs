const deliveryTagMap = {
  INSTANT: "Giao ngay 30m",
  SAME_DAY: "Giao trong 2h - 4h",
  BULK: "Giao trong ngày",
};

const formatPrice = (price) => {
  if (!price) {
    return "Miễn phí";
  }
  return String(`${price}`).replace(/(.)(?=(\d{3})+$)/g, "$1.") + " ₫";
};

export default {
  deliveryTagMap,
  formatPrice,
};
