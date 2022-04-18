export function getSelectedAddress(a) {
  const {
    full_name: name,
    city,
    city_id,
    district,
    district_id,
    ward,
    ward_id,
    phone_number: phone,
    street,
  } = a;
  let rs = {
    name,
    phone,
    addressText: `${street}, ${ward}, ${district}, ${city}`,
    address: {
      street: street,
      city: {
        id: city_id,
        name: city,
      },
      district: {
        id: district_id,
        name: district,
      },
      ward: {
        id: ward_id,
        name: ward,
      },
    },
  };
  return rs;
}
