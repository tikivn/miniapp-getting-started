Page({
  data: {
    img: undefined,
  },
  onChooseImage() {
    my.chooseImage({
      success: (res) => {
        this.setData({
          img: res.uri,
        });
      },
    });
  },
});
