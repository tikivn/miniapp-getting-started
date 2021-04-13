Page({
  onLoading() {
    my.showLoading({ content: "Loading..." });
    setTimeout(() => {
      my.hideLoading();
    }, 3000);
  },
});
