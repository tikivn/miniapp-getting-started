import { getData, getDataById } from '../../services';
import { constants as c } from '../../constants';

export const getAllOrders = () => async (dispatch) => {
  const data = await getData('orders');
  dispatch({
    type: c.GET_ALL_ORDERS,
    data,
  });
};

export const getOrderById = (id) => async (dispatch) => {
  const data = await getDataById('orders', id);
  dispatch({
    type: c.GET_ORDER_INFO,
    data,
  });
};
