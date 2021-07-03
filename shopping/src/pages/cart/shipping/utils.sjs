export const formatAddress = (address = {}) => {
  return [
    address.street || "",
    address.ward.name || "",
    address.district.name || "",
    address.city.name || "",
  ].join(", ");
};
