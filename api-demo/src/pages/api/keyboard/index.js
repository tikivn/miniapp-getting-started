Page({
  bindHideKeyboard(e) {
    if (e.detail.value === "123") {
      my.hideKeyboard();
    }
  },
});
