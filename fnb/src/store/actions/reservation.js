import { constants as c } from "../../constants";
import { getDataInstant } from "../../services";

export const selectTable = (data) => (dispatch) => {
  dispatch({
    type: c.SELECT_TABLE,
    data,
  });
};

export const bookingTable = (data) => async (dispatch) => {
  dispatch({
    type: c.BOOKING_TABLE,
    data,
  });
};

export const getReservations = () => async (dispatch) => {
  const data = await getDataInstant('reservations');

  dispatch({
    type: c.GET_ALL_RESERVATIONS,
    data,
  });
};

export const getReservationDetail = (id) => async (dispatch) => {
  dispatch({
    type: c.GET_RESERVATION_DETAIL,
    id,
  });
};

export const cancelBooking = (data) => async (dispatch) => {
  dispatch({
    type: c.CANCEL_BOOKING,
    data,
  });
};
