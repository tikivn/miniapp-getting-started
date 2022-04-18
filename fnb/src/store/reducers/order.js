import { constants as c } from "../../constants";

const initialState = {
  list: {
    status: c.LOADING,
    data: [],
  },
  info: {
    status: c.LOADING,
    data: {},
  },
};

export default function order(state = initialState, action) {
  switch (action.type) {
    case c.GET_ALL_ORDERS:
      return {
        ...state,
        list: {
          status: c.SUCCESS,
          data: action.data,
        },
      };
    case c.GET_ORDER_INFO:
      return {
        ...state,
        info: {
          status: c.SUCCESS,
          data: action.data,
        },
      };
    default:
      return state;
  }
}
