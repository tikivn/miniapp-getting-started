import { constants as c } from "../../constants";
import { clone } from "../../helper";

const initialState = {
  addressList: [],
  status: c.LOADING,
  defaultAddress: {},
};

export default function buyer(state = initialState, action) {
  switch (action.type) {
    case c.GET_BUYER_INFO:
      return handleGetBuyerInfo(state, action);
    case c.CHANGE_DEFAULT_ADDRESS:
      return handleChangeDefaultAddress(state, action);
    case c.ADD_ADDRESS:
      return handleAddAddress(state, action);
    case c.UPDATE_ADDRESS:
      return handleUpdateAddress(state, action);
    case c.DELETE_ADDRESS:
      return handleDeleteAddress(state, action);
    default:
      return state;
  }
}

function handleGetBuyerInfo(curState, { data }) {
  if (curState.status === c.SUCCESS) return curState;
  return { ...data, status: c.SUCCESS };
}

function handleChangeDefaultAddress(curState, { id, data }) {
  let newState = clone(curState);
  if (id) {
    const newDefault = newState.addressList.filter((v) => v._id === id)[0];
    if (!newDefault) return newState;
    newState.defaultAddress = newDefault;
  } else {
    newState.defaultAddress = data;
  }
  return newState;
}

function handleAddAddress(curState, { data }) {
  let newState = clone(curState);
  const a = { ...data, _id: "_id" + new Date().getTime() };
  newState.defaultAddress = a;
  newState.addressList.push(a);
  return newState;
}

function handleUpdateAddress(curState, { data }) {
  const index = curState.addressList.findIndex((v) => v._id === data._id);
  if (index === -1) return curState;
  let newState = clone(curState);
  newState.addressList[index] = data;
  newState.defaultAddress = data;
  return newState;
}

function handleDeleteAddress(curState, { id }) {
  const index = curState.addressList.findIndex((v) => v._id === id);
  if (index === -1) return curState;
  let newState = clone(curState);
  newState.addressList.splice(index, 1);
  if (newState.addressList.length) {
    if (newState.defaultAddress._id === id)
      newState.defaultAddress = newState.addressList[0];
  } else {
    newState.defaultAddress = {};
  }
  return newState;
}
