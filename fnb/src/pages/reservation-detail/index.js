import { queryToObj } from '../../helper';
import { $page } from '@tiki.vn/redux-miniprogram-bindings';
import {
  getReservationDetail,
  cancelBooking,
} from '../../store/actions/reservation';

import { delay } from '../../helper';

$page({
  mapState: [
    (state) => ({
      info: state.reservation.info,
    }),
  ],
  mapDispatch: { getReservationDetail, cancelBooking },
})({
  data: {
    isLoading: true,
    hideModalTime: 0,
    isShowModal: false,
  },
  async onConfirmCancel() {
    this.cancelBooking(this.data.info.data);
    this.setData({ isShowModal: false });
    await delay(200);
    my.navigateBack();
  },

  onCancel() {
    this.setData({ isShowModal: true });
  },

  onCloseModal() {
    this.setData({ isShowModal: false, hideModalTime: new Date().getTime() });
  },

  onMaskClick() {
    this.setData({ isShowModal: false, hideModalTime: new Date().getTime() });
  },

  onPhoneCall(number) {
    if (new Date().getTime() - this.data.hideModalTime < 500) return;
    my.makePhoneCall({ number });
  },

  async onLoad(query) {
    const { id } = queryToObj(query);
    await this.getReservationDetail(id);
    const reserve = this.data.info.data;

    this.setData({
      reserve,
      isLoading: false,
    });
  },

  onReady() {
    my.hideBackHome({ hide: false });
  },
});
