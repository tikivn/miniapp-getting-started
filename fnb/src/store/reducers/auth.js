import { constants as c } from "../../constants";

const initialState = {
  token: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case c.GET_USER_TOKEN:
      return {
        ...state,
        token: action.data,
      };
    case c.REFRESH_USER_TOKEN:
      return {
        ...state,
        token: action.data
      }
    default:
      return state;
  }
}
