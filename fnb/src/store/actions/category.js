import { getData } from "../../services";
import { constants as c } from "../../constants";

export const getAllCategories = () => async (dispatch) => {
  const data = await getData("categories");
  dispatch({ type: c.GET_CATEGORIES_SUCCESS, data });
};
