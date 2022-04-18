import { constants as c } from "../../constants";

const initialState = {
  list: {
    data: [],
    status: c.LOADING,
  },
};

export default function category(state = initialState, action) {
  switch (action.type) {
    case c.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        list: {
          data: action.data,
          status: c.SUCCESS,
        },
      };
    default:
      return state;
  }
}
