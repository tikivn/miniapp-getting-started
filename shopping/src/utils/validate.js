const PATTERN_MOBILE = /^(08|09)[0-9]{8}$/;
const PATTERN_MOBILE_NEW = /^(03[2-9]|07[06-9]|08[1-5]|05[2689])[0-9]{7}$/;
const PATTERN_TELEPHONE = /^(02)[0-9]{9}$/;
const PATTERN_EMAIL =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const hasValue = (value) =>
  value !== null && value !== undefined && `${value}`.trim().length > 1;

export const validatePhone = (value) => {
  const isValid =
    PATTERN_MOBILE.test(`${value}`) ||
    PATTERN_MOBILE_NEW.test(`${value}`) ||
    PATTERN_TELEPHONE.test(`${value}`);
  return isValid ? null : "Số điện thoại không hợp lệ";
};

export const validateEmail = (value) => {
  const isValid = PATTERN_EMAIL.test(String(`${value}`).toLowerCase());
  return isValid ? null : "Email không hợp lệ";
};

export const validateName = (value) => {
  const isValid = `${value || ""}`.trim().split(" ").length > 1;
  return isValid ? null : "Tên phải từ 2 từ trở lên";
};

export const validateAddress = (value) => {
  const isValid = `${value || ""}`.trim().split(" ").length > 1;
  return isValid ? null : "Địa chỉ phải từ 2 từ trở lên";
};
