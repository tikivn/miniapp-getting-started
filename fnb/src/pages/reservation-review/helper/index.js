export function validate(a) {
  let msg = {};
  let isValid = true;
  if (!a.name.trim().length || a.name.length > 50) {
    msg.name = 'Please enter a valid name';
  }
  if (containsSpecialChars(a.name)) {
    msg.name =
      'The content contains invalid characters (numbers, special characters...), please re-enter';
  }
  if (a.phone.trim().length !== 10) {
    msg.phone = 'Please enter a 10 digit phone number';
  }
  if (!a.email.length || !emailValidate(a.email)) {
    msg.email = 'Please enter a valid email address';
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
function emailValidate(e) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(e);
}
export const createDataToSubmit = (a) => {
  const { city, district, ward, street } = a.address;
  a.addressText = `${street}, ${ward.name}, ${district.name}, ${city.name}`;
  return a;
};
