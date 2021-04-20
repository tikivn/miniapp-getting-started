Page({
  onConfirm() {
    my.confirm({
      title: "Alert title",
      content: "Alert content",
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
      success: (result) => {
        my.alert({ title: `${result.confirm}` });
      },
      fail: (e) => {
        my.alert({ title: `${e}` });
      },
      complete: () => {
        console.log("Complete");
      },
    });
  },
});
