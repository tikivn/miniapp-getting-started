import { getAvailableDate, getAvailableTime } from "../../helper";

Component({
  props: {
    base: "", // base order time
    isShow: false,
    onTimeSelect() {},
    onCLose() {},
  },
  data: {
    baseTime: "", // clone first base time from props
    time: [],
    date: [],
    selectedDateIndex: 0,
    selectedTimeIndex: 0,
    selectedDate: "Today",
    selectedTime: "",
  },
  onInit() {
    const date = getAvailableDate();
    const time = getAvailableTime(date[0].value, this.props.base);
    this.setData({
      time,
      date,
      baseTime: this.props.base,
      selectedTime: this.props.base.hour + ":" + this.props.base.min,
    });
  },
  deriveDataFromProps({ isShow: isShowNext }) {
    const { isShow: isShowCurrent } = this.props;
    if (isShowNext && !isShowCurrent) {
      const time = getAvailableTime(new Date().getTime(), this.props.base);
      this.setData({
        time,
        selectedDateIndex: 0,
        selectedTimeIndex: 0,
      });
    }
  },
  methods: {
    onTimeChange(e) {
      const [dIndex, tIndex] = e.detail.value;
      const { value } = this.data.date[dIndex];
      const { baseTime } = this.data;
      const time = getAvailableTime(value, baseTime);
      this.setData({
        time,
        selectedDateIndex: dIndex,
        selectedTimeIndex: tIndex,
      });
    },
    onTimeSelect() {
      const { time, date, selectedTimeIndex, selectedDateIndex } = this.data;
      this.props.onTimeSelect(
        time[selectedTimeIndex],
        date[selectedDateIndex].content
      );
    },
    onClose() {
      this.props.onClose();
    },
  },
});
