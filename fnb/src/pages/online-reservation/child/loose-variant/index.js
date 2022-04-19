import { getDateList } from "./helper";

Component({
  data: {
    peopleList: Array(20),
    dateList: [],
  },
  props: {
    onNumberPeopleSelect() {},
    onTimeSelect() {},
    onDateSelect() {},
    onStoreSelect() {},
    onReserve() {},
    store: {},
    selected: {},
    timeList: [],
  },
  onInit() {
    this.setData({
      dateList: getDateList(),
    });
  },
  methods: {
    onDateSelect(e) {
      const { date } = e.target.dataset;
      this.props.onDateSelect(date);
      this.setData({
        isShowDateSelect: false,
      });
    },
    onNumberPeopleSelect(e) {
      const { number } = e.target.dataset;
      this.props.onNumberPeopleSelect(number);
      this.setData({
        isShowNumberPeopleSelect: false,
      });
    },
    onTimeSelect(e) {
      this.props.onTimeSelect(e);
    },
    onStoreSelect() {
      this.props.onStoreSelect();
    },
    onReserve() {
      this.props.onReserve();
    },
  },
});
