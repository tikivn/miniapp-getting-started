Page({
  data: {
    value: 'value',
  },
  onInput(event) {
    console.log('onInput', event);
  },
  onConfirm(event) {
    console.log('onConfirm', event);
  },
  onFocus(event) {
    console.log('onFocus', event);
  },
  onBlur(event) {
    console.log('onBlur', event);
  },
  handleChangeInput(event) {
    this.setData({ value: event.detail.value });
  },
  handleClearInput() {
    this.setData({ value: '' });
  },
});
