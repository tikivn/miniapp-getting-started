import { combineReducers } from "redux";

import auth from "./auth";
import cart from "./cart";
import order from "./order";
import buyer from "./buyer";
import store from "./store";
import product from "./product";
import category from "./category";
import reservation from "./reservation";

const rootReducer = combineReducers({
  auth,
  cart,
  store,
  buyer,
  order,
  product,
  category,
  reservation,
});

export default rootReducer;
