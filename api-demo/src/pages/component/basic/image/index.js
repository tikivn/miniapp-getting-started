import source from "../../../../images/app_logo.png";

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
