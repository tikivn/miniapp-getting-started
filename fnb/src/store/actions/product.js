import { getData } from '../../services';
import { delay } from '../../helper';
import { constants as c } from '../../constants';

export const getProductInfo = (id) => async (dispatch) => {
  await delay(1500);
  dispatch({
    type: c.GET_PRODUCT_DETAIL,
    id,
  });
};

export const toggleFavoriteProduct = (id, isFavorite) => (dispatch) => {
  dispatch({
    type: c.TOGGLE_FAVORITE_PRODUCT,
    id,
    isFavorite,
  });
};

export const getAllProducts = () => async (dispatch) => {
  const data = await getData('products');
  dispatch({
    type: c.GET_ALL_PRODUCTS,
    data,
  });
};

export const increaseProduct = () => (dispatch) => {
  dispatch({
    type: c.INCREASE_PRODUCT,
  });
};

export const decreaseProduct = () => (dispatch) => {
  dispatch({
    type: c.DECREASE_PRODUCT,
  });
};

export const selectAttribute = (aId, vId) => (dispatch) => {
  dispatch({
    type: c.SELECT_ATTRIBUTE,
    aId,
    vId,
  });
};
