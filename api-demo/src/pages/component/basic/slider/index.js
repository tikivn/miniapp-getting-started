Page({
  data: {
    value: 0,
  },
  onChange(e) {
    console.log("onChange: ", e);
  },
  onChanging(e) {
    console.log("onChanging: ", e);
  },
});
