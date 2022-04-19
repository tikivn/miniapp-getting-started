import { navigateTo } from '../../helper';
import { $page, useSubscribe } from '@tiki.vn/redux-miniprogram-bindings';
import {
  getReservations,
  cancelBooking,
} from '../../store/actions/reservation';

$page({
  mapState: [
    (state) => ({
      list: state.reservation.list,
    }),
  ],
  mapDispatch: { getReservations, cancelBooking },
})({
  data: {
    hideModalTime: 0,
    isLoading: true,
    isShowModal: false,
  },

  onMoveReserveDetail(r) {
    if (new Date().getTime() - this.data.hideModalTime < 500) return;
    const id = r._id;
    navigateTo('reservation-detail', { id });
  },

  onCancelBooking() {
    this.setData({
      isShowModal: true,
    });
  },

  onHideModal() {
    this.setData({
      isShowModal: false,
      hideModalTime: new Date().getTime(),
    });
  },

  async onConfirlCancelBooking(data) {
    await this.cancelBooking(data);
    this.setData({
      isShowModal: false,
      hideModalTime: new Date().getTime(),
      reservations: this.data.list.data,
    });
  },

  // Life Cycle

  async onLoad(query) {
    if (this.data.list.status === 'LOADING') {
      await this.getReservations();
    }
    const reservations = this.data.list.data;
    this.setData({
      reservations,
      isLoading: false,
    });
  },

  onShow() {
    this.unsubcribe = useSubscribe((curr) => {
      const { data } = curr.reservation.list;
      const reservations = data.sort(function (a, b) {
        const prevDate = a.date.split('/').reverse().join('');
        const nextDate = b.date.split('/').reverse().join('');
        return prevDate > nextDate
          ? -1
          : prevDate < nextDate
          ? 1
          : 0 || a.time.localeCompare(b.time);
      });
      this.setData({
        reservations,
      });
    });
  },

  onUnload() {
    this.unsubcribe();
  },
});
