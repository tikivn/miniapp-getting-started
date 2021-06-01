Page({
  onSubmit(e) {
    console.log("onSubmit", e);
    my.alert({
      content: `Form value：${JSON.stringify(e.detail.value)}`,
    });
  },
  onReset(e) {
    console.log("onReset", e);
  },
});
