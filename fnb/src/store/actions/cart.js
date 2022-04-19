import { constants as c } from '../../constants';
import { getDataInstant } from '../../services';

export const addCart = (data) => (dispatch) => {
  dispatch({
    type: c.ADD_CART,
    data,
  });
};

export const changeItemNumber = (orderMethod, _id, value) => (dispatch) => {
  dispatch({
    type: c.CHANGE_ITEM_NUMBER_IN_CART,
    orderMethod,
    _id,
    value,
  });
};

export const applyCoupon = (orderMethod, code) => (dispatch) => {
  const coupons = getDataInstant('coupons');
  let value = 0;
  let status = c.FAILURE;
  const selectedCoupon = coupons.filter(
    (v) => v.code.toLowerCase() === code.trim().toLowerCase(),
  )[0];
  if (selectedCoupon) {
    value = selectedCoupon.value;
    status = c.SUCCESS;
  }
  dispatch({
    type: c.APPLY_COUPON,
    orderMethod,
    status,
    value,
    code,
  });
};

export const resetCoupon = (orderMethod) => (dispatch) => {
  dispatch({
    type: c.RESET_COUPON,
    orderMethod,
    status: c.NONE,
    value: 0,
  });
};

export const changePickupTime = (time, date) => (dispatch) => {
  dispatch({
    type: c.CHANGE_TIME_PICKUP,
    date,
    time,
  });
};

export const resetCart = (orderMethod) => (dispatch) => {
  dispatch({
    type: c.RESET_CART,
    orderMethod,
  });
};
