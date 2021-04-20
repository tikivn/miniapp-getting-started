Page({
  onToast() {
    my.showToast({
      type: "fail",
      content: "Toast content",
      buttonText: "OK",
      success: () => {
        my.alert({ title: "success" });
      },
      fail: (e) => {
        my.alert({ title: `${e}` });
      },
      complete: () => {
        console.log("Complete");
      },
    });
    setTimeout(() => {
      my.hideToast();
    }, 3000);
  },
});
