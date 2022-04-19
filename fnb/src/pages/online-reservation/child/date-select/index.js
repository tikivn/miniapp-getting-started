Component({
  props: {
    onClose() {},
    onDateSelect() {},
    defaultDate: '',
  },
  data: {
    date: 0,
  },
  methods: {
    onClose() {
      this.props.onClose();
    },
    onDateSelect(d) {
      this.setData({
        date: d.dates[0],
      });
    },
    onConfirm() {
      const { date } = this.data;
      const { defaultDate } = this.props;
      this.props.onDateSelect(date ? date : defaultDate);
    },
  },
});
