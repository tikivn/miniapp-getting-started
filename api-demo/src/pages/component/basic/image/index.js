import source from "../../../../images/component_bg.png";

Page({
  data: {
    source,
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
