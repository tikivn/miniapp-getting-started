import { getAuth, refreshToken } from "../../helper/auth";
import { constants as c } from "../../constants";

export const getUserToken = () => async (dispatch) => {
  const data = await getAuth();
  const status = data ? c.SUCCESS : c.FAILURE;
  dispatch({
    type: c.GET_USER_TOKEN,
    data,
    status,
  });
};

export const refreshUserToken = () => async (dispatch) => {
  const data = await refreshToken();
  const status = data ? c.SUCCESS : c.FAILURE;
  dispatch({
    type: c.REFRESH_USER_TOKEN,
    data,
    status,
  });
};
