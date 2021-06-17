Page({
  onChange(value, mode) {
    this.setData({
      message: `new value ${value}, mode ${mode}`,
    });
  },
});
