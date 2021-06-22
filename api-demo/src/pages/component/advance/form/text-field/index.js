Page({
  data: {
    filled: "Filled",
  },
  onInput(event) {
    console.log("onInput", event);
  },
  onConfirm(event) {
    console.log("onConfirm", event);
  },
  onFocus(event) {
    console.log("onFocus", event);
  },
  onBlur(event) {
    console.log("onBlur", event);
  },
  onChangeFilled(event) {
    this.setData({ filled: event.detail.value });
  },
});
