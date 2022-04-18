import { $page } from '@tiki.vn/redux-miniprogram-bindings';

import { selectTable, getReservations } from '../../store/actions/reservation';
import { getAllStore } from '../../store/actions/store';
import { constants as c } from '../../constants';
import { navigateTo } from '../../helper';

import {
  isToday,
  getToday,
  isSameDate,
  dateFormat,
  isPreviousDate,
  isAvailableTime,
  getAvailableTime,
  getNearestAvailableTime,
} from './helper';

$page({
  mapState: [
    (state) => ({
      store: state.store.defaultStore,
      list: state.reservation.list,
    }),
  ],
  mapDispatch: { getAllStore, selectTable, getReservations },
})({
  data: {
    variant: 'COMPACT',
    status: c.LOADING,
    timeList: [],
    selected: {
      numberOfAdults: 1,
      date: getToday(),
    },
  },
  async onLoad(query) {
    if (!this.data.store) {
      await this.getAllStore();
    }
    if (this.data.list.status === 'LOADING') {
      await this.getReservations();
    }
    this.setData({
      reservations: this.data.list.data,
      status: c.SUCCESS,
    });
  },
  onShow() {
    my.hideBackHome({ hide: true });
    this.setData({
      reservations: this.data.list.data,
      timeList: getAvailableTime(this.data.selected.date.value),
      selected: {
        ...this.data.selected,
        time: getNearestAvailableTime(this.data.selected.date.value),
      },
    });
  },
  onDateSelect(d) {
    const { selected } = this.data;
    if (isSameDate(selected.date.value, d)) return;

    this.setData({
      timeList: getAvailableTime(d),
      selected: {
        ...selected,
        date: dateFormat(d),
        time: getNearestAvailableTime(d),
      },
    });
  },
  onNumberPeopleSelect(v) {
    this.setData({
      selected: {
        ...this.data.selected,
        numberOfAdults: v,
      },
    });
  },
  onTimeSelect(e) {
    const { time } = e.target.dataset;
    this.setData({
      selected: {
        ...this.data.selected,
        time,
      },
    });
  },
  onStoreSelect() {
    navigateTo('store-search', { next: 'reservation' });
  },
  onSupportSelect() {
    my.makePhoneCall({ number: '0342909090' });
  },
  onReserve() {
    const { selected, store } = this.data;
    const { date } = selected;
    if (
      isPreviousDate(selected.date.value) ||
      (isToday(selected.date.value) && !isAvailableTime(selected.time))
    ) {
      my.alert({
        title: 'Oh no',
        content: 'Please select a valid time to reserve this table',
      });
      this.setData({
        timeList: getAvailableTime(getToday().value),
      });
      return;
    }
    this.selectTable({ ...selected, store, date: date.content });
    navigateTo('reservation-review');
  },
});
