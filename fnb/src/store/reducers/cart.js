import { deepEqual, clone, formatWLength } from '../../helper';

import { constants as c } from '../../constants';

const initialState = {
  total: 0,
  buyer: {},
  products: [],
  shippingFee: 15000,
  orderMethod: c.DELIVERY,
  products: [],
  shippingFee: 15000,
  coupon: {
    status: c.NONE,
    value: 0,
  },
  time: {
    hour: '00',
    min: '00',
  },
  date: 'Today',
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case c.ADD_CART:
      return handleAddCart(state, action.data);
    case c.CHANGE_ITEM_NUMBER_IN_CART:
      return handleChangeCartItemNumber(
        state,
        action.orderMethod,
        action._id,
        action.value,
      );
    case c.APPLY_COUPON:
      return handleApplyCoupon(state, action);
    case c.RESET_COUPON:
      return handleApplyCoupon(state, action);
    case c.CHANGE_TIME_PICKUP:
      return handleChangePickupTime(state, action);
    case c.RESET_CART:
      return handleResetCart(state, action.orderMethod);
    default:
      return state;
  }
}

function handleAddCart(curState, data) {
  let newState = clone(curState);
  if (newState.orderMethod !== data.orderMethod) {
    newState.products = [];
    newState.total = 0;
  }
  newState.orderMethod = data.orderMethod;

  newState.total += data.total;

  if (data.orderMethod === c.STORE_PICKUP) {
    const { hour, min } = getPickupTime();
    newState.time = {
      hour,
      min,
    };
    newState.shippingFee = 0;
  } else {
    newState.shippingFee = 15000;
  }

  const preIndex = newState.products.findIndex((v) =>
    deepEqual(v, data, ['number', 'total', '_id', 'orderMethod']),
  );

  if (preIndex !== -1) newState.products[preIndex].number += data.number;
  else
    newState.products.push({
      ...data,
      total: data.total / data.number,
      _id: 'id_' + new Date().getTime(),
    });

  return newState;
}

function getPickupTime() {
  const d = new Date();
  let m = d.getMinutes() + 20;
  let h = d.getHours() + Math.floor(m / 60);
  h += Math.floor(m / 60);
  m = m % 60;
  if (m > 30) {
    m = 0;
    h++;
  } else m = 30;
  return {
    hour: formatWLength(h, 2),
    min: formatWLength(m, 2),
  };
}

function handleChangeCartItemNumber(curState, orderMethod, _id, value) {
  const index = curState.products.findIndex((v) => v._id === _id);
  if (index === -1) return curState;

  let newState = clone(curState);

  const { total, number } = curState.products[index];

  newState.products[index].number = value;
  newState.total += total * value - total * number;

  if (newState.products[index].number === 0) {
    newState.products.splice(index, 1);
    if (!newState.products.length) {
      newState.coupon = { status: c.NONE, value: 0 };
    }
  }
  return newState;
}

function handleApplyCoupon(curState, { orderMethod, status, value, code }) {
  let newState = clone(curState);
  newState.coupon = { status, value, code };
  return newState;
}

function handleChangePickupTime(curState, { time, date }) {
  let newState = clone(curState);
  newState.time = time;
  newState.date = date;
  return newState;
}

function handleResetCart(curState, orderMethod) {
  let newState = clone(curState);
  newState = initialState;
  return newState;
}
