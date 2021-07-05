export const formatAddress = (address = {}) => {
  return [
    address.street || "",
    address.ward.name || "",
    address.district.name || "",
    address.city.name || "",
  ].join(", ");
};

export const deliveryTagMap = {
  INSTANT: "Giao ngay 30m",
  SAME_DAY: "Giao trong 2h - 4h",
  BULK: "Giao trong ngày",
};
