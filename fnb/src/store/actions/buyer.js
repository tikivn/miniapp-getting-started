import { getData } from "../../services";
import { constants as c } from "../../constants";

export const getBuyerInfo = () => async (dispatch) => {
  const data = await getData("buyer");
  dispatch({
    type: c.GET_BUYER_INFO,
    data,
  });
};

export const changeDefaultAddress = (id, data) => (dispatch) => {
  dispatch({
    type: c.CHANGE_DEFAULT_ADDRESS,
    id,
    data,
  });
};

export const addBuyerAddress = (data) => (dispatch) => {
  dispatch({
    type: c.ADD_ADDRESS,
    data,
  });
};

export const updateBuyerAddress = (data) => (dispatch) => {
  dispatch({
    type: c.UPDATE_ADDRESS,
    data,
  });
};

export const deleteBuyerAddress = (id) => (dispatch) => {
  dispatch({
    type: c.DELETE_ADDRESS,
    id,
  });
};
