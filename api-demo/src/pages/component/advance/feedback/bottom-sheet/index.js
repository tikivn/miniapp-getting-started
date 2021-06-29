Page({
  data: {
    show: false,
  },
  onShowBottomSheet(e) {
    this.setData({
      show: true,
      template: e.target.dataset.template,
    });
  },
  onClose() {
    this.setData({
      show: false,
    });
  },
  onClick(e) {
    const template = e.target.dataset.template;
    my.alert({
      title: "click",
      content: `Receive click from bottom sheet with ${template}`,
    });
  },
});
