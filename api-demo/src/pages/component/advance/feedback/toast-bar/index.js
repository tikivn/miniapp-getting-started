Page({
  data: {
    showToast: false,
    configs: {}
  },
  onShowToast(event) {
    const {configs} = event.target.dataset
    this.setData({ showToast: true, configs });
  },
  onCloseToast() {
    this.setData({ showToast: false });
  },
  onTapAction(){
    my.alert({content: 'Action clicked!'})
  }
});
