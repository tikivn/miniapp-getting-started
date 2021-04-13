Page({
  data: {
    title: "",
    titleColor: "",
    borderBottomColor: "",
    image: "",
  },
  titleChange(e) {
    this.setData({
      title: e.detail.value,
    });
  },
  borderBottomColorChange(e) {
    this.setData({
      borderBottomColor: e.detail.value,
    });
  },
  titleBarColorChange(e) {
    this.setData({
      titleBarColor: e.detail.value,
    });
  },
  imageChange(e) {
    this.setData({
      image: e.detail.value,
    });
  },
  setNavigationBar() {
    const title = this.data.title;
    const borderBottomColor = this.data.borderBottomColor;
    const titleBarColor = this.data.titleBarColor;
    const image = this.data.image;
    my.setNavigationBar({
      title,
      borderBottomColor,
      titleBarColor,
      image,
      fail: (error) => {
        my.alert({ content: error.errorMessage });
      },
    });
  },
  reset() {
    my.setNavigationBar({
      reset: true,
      fail: (error) => {
        my.alert({ content: error.errorMessage });
      },
    });
  },
});
