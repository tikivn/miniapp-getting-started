Page({
  data: {
    imagePath: './images/component_bg.png'
  },
  onLoad(e) {
    console.log("onLoad", e);
  },
  onTap(e) {
    console.log("onTap", e);
  },
  onError(e) {
    console.log("onError", e);
  },
});
