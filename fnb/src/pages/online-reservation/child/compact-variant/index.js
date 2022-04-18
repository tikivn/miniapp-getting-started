Component({
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
  data: {
    isShowDateSelect: false,
    isShowNumberPeopleSelect: false,
  },
  methods: {
    onShowDateSelectSheet() {
      this.setData({
        isShowDateSelect: true,
      });
    },
    onCloseDateSelectSheet() {
      this.setData({
        isShowDateSelect: false,
      });
    },
    onShowNumberPeopleSelect() {
      this.setData({
        isShowNumberPeopleSelect: true,
      });
    },
    onCloseNumberPeopleSelect() {
      this.setData({
        isShowNumberPeopleSelect: false,
      });
    },
    onDateSelect(d) {
      this.props.onDateSelect(d);
      this.setData({
        isShowDateSelect: false,
      });
    },
    onNumberPeopleSelect(v) {
      this.props.onNumberPeopleSelect(v);
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
