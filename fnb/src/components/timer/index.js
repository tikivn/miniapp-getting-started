import { timeFormat } from './helper';

Component({
  props: {
    time: 300,
    isHide: false,
    onTimeOut() {},
  },
  data: {
    remain: 300,
    displayStr: '00:00',
    hideTime: 0,
  },
  onInit() {
    const displayStr = timeFormat(this.props.time);
    this.setData({ remain: this.props.time, displayStr });
    const timer = setInterval(() => {
      this.setData({ remain: this.data.remain - 1 });
    }, 1000);
    this.timer = timer;
  },
  deriveDataFromProps(next) {
    if (next.isHide) {
      this.setData({
        hideTime: new Date().getTime(),
      });
    }
    if (!next.isHide && this.props.isHide) {
      const pauseTime = Math.floor(
        (new Date().getTime() - this.data.hideTime) / 1000,
      );
      this.setData({
        remain: Math.max(this.data.remain - pauseTime, 0),
      });
    }
  },
  didUpdate() {
    const displayStr = timeFormat(this.data.remain);
    this.setData({ displayStr });
    if (this.data.remain <= 0) {
      clearInterval(this.timer);
      this.props.onTimeOut();
    }
  },
  didUnmount() {
    clearInterval(this.timer);
  },
  methods: {},
});
