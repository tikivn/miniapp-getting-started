import { constants as c } from '../../constants';
import { clone } from '../../helper';

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

export default function reservation(state = initialState, action) {
  switch (action.type) {
    case c.BOOKING_TABLE: {
      return handleBooking(state, action);
    }

    case c.SELECT_TABLE:
      return {
        ...state,
        info: {
          status: c.SUCCESS,
          data: action.data,
        },
      };

    case c.GET_ALL_RESERVATIONS: {
      return {
        ...state,
        list: {
          status: c.SUCCESS,
          data: action.data,
        },
      };
    }

    case c.GET_RESERVATION_DETAIL: {
      const detail = handleGetReservationDetail(state, action);
      return {
        ...state,
        info: {
          status: c.SUCCESS,
          data: detail.info,
        },
      };
    }

    case c.CANCEL_BOOKING: {
      return handleCancelBooking(state, action);
    }
    default:
      return state;
  }
}

const handleGetReservationDetail = (curState, { id }) => {
  const rs = curState.list.data.filter((v) => v._id === id)[0];
  let newState = clone(curState);
  newState.info = rs;
  return newState;
};

const handleBooking = (curState, { data }) => {
  let newState = clone(curState);
  const newBooking = { ...data };
  newState.list.data.push(newBooking);
  return newState;
};

const handleCancelBooking = (curState, { data }) => {
  const index = curState.list.data.findIndex((v) => v._id === data._id);
  if (index === -1) return curState;
  let newState = clone(curState);
  newState.list.data[index].status = c.CANCELED;
  return newState;
};
