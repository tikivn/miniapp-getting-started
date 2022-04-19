export function validate(a) {
  let msg = {};
  let isValid = true;
  if (!a.name.length || a.name.length > 50) {
    msg.name = 'Please enter a valid name';
  }
  if (containsSpecialChars(a.name)) {
    msg.name =
      'The content contains invalid characters (numbers, special characters...), please re-enter';
  }
  if (a.phone.trim().length !== 10) {
    msg.phone = 'Please enter a 10 digit phone number';
  }
  if (!a.address.city) {
    msg.city = 'Please select your city';
  }
  if (!a.address.district) {
    msg.district = 'Please select your district';
  }
  if (!a.address.ward) {
    msg.ward = 'Please select your ward';
  }
  if (a.address.street.split(' ').length < 2) {
    msg.street = 'The address must contain at least 2 words';
  }
  if (!a.address.street) {
    msg.street = 'Please enter street name';
  }
  if (Object.keys(msg).length) {
    isValid = false;
  }
  return [isValid, msg];
}
function containsSpecialChars(str) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\d]/;
  return specialChars.test(str);
}
export const createDataToSubmit = (a) => {
  const { city, district, ward, street } = a.address;
  a.addressText = `${street}, ${ward.name}, ${district.name}, ${city.name}`;
  return a;
};
export const createDataForAddressBook = (a) => {
  const { name: full_name, phone: phone_number } = a;
  const { city, district, ward, street } = a.address;
  const rs = {
    full_name,
    phone_number,
    street,
    city_id: city.id,
    district_id: district.id,
    ward_id: ward.id,
    is_default: false,
    delivery_address_type: 'home',
  };
  return rs;
};
