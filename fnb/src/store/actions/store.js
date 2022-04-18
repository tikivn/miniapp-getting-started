import { constants as c } from '../../constants';
import { getData } from '../../services';

export const getAllStore = () => async (dispatch) => {
  const data = await getData('stores');
  dispatch({
    type: c.GET_ALL_STORE,
    data,
  });
};

export const changeDefaultStore = (id) => (dispatch) => {
  dispatch({
    type: c.CHANGE_DEFAULT_STORE,
    id,
  });
};

export const getStoreById = (id) => async (dispatch) => {
  dispatch({
    type: c.GET_STORE_INFO,
    id,
  });
};

export const addFavoriteStore = (id) => (dispatch) => {
  dispatch({
    type: c.ADD_FAVORITE_STORE,
    id,
  });
};

export const removeFavoriteStore = (id) => (dispatch) => {
  dispatch({
    type: c.REMOVE_FAVORITE_STORE,
    id,
  });
};

export const toggleFavoriteStore = (id, favorite) => (dispatch) => {
  dispatch({
    type: c.TOGGLE_FAVORITE_STORE,
    id,
    favorite,
  });
};
