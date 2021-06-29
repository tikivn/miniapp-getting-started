Page({
  data: {
    remoteUrl:
      "https://salt.tikicdn.com/cache/w1240/ts/brickv2og/46/be/6f/dbc3e5d06f9f063d4b69c1cb7248d9fb.png.webp",
    localResources: "images/app_logo.png",
  },
  onFromRemoteImage() {
    this.getImageInfo(this.data.remoteUrl);
  },
  onFromLocalImage() {
    my.chooseImage({
      count: 1,
      success: (res) => {
        this.getImageInfo(res.filePaths[0]);
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
  onFromResources() {
    this.getImageInfo(this.data.localResources);
  },

  getImageInfo(path) {
    my.getImageInfo({
      src: path,
      success: (res) => {
        console.log(res);
        my.alert({ title: "File Info", content: JSON.stringify(res) });
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
});
