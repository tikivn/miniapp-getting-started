import { constants as c } from '../../constants';
import { getDataInstant } from '../../services';
import { clone } from '../../helper';

const initialState = {
  info: {
    data: {},
    status: c.LOADING,
  },
  list: {
    data: [],
    status: c.LOADING,
  },
};

export default function product(state = initialState, action) {
  switch (action.type) {
    case c.GET_PRODUCT_DETAIL:
      return handleGetProductInfo(state, action);
    case c.TOGGLE_FAVORITE_PRODUCT:
      return handleToggleFavoriteProduct(state, action);
    case c.GET_ALL_PRODUCTS:
      return {
        ...state,
        list: {
          status: c.SUCCESS,
          data: action.data,
        },
      };
    default:
      return state;
  }
}

function handleGetProductInfo(curState, { id }) {
  if (!curState.list.data.length)
    curState.list.data = getDataInstant('products');
  const selected = curState.list.data.find((v) => v._id === id);
  if (selected) {
    return {
      ...curState,
      info: {
        data: selected,
        status: c.SUCCESS,
      },
    };
  }
  return {
    ...curState,
    info: {
      data: {},
      status: c.FAILURE,
    },
  };
}

function handleToggleFavoriteProduct(curState, { id }) {
  let newState = clone(curState);
  const selectedIndex = newState.list.data.findIndex((v) => v._id === id);
  if (selectedIndex !== -1) {
    newState.list.data[selectedIndex].isFavorite =
      !newState.list.data[selectedIndex].isFavorite;
  }
  newState.info = {
    data: {
      ...newState.info.data,
      isFavorite: !curState.info.data.isFavorite,
    },
    status: c.SUCCESS,
  };
  return newState;
}
