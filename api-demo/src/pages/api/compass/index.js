Page({
  offCompass() {
    if (my.canIUse('offCompassChange')) {
      my.offCompassChange({
        success: (res) => {
          my.alert({
            title: JSON.stringify(res),
          });
        },
      });
    }
  },
  onCompass() {
    if (my.canIUse('onCompassChange')) {
      my.onCompassChange({
        success: (res) => {
          my.alert({
            title: JSON.stringify(res),
          });
        },
        fail: (res) => {
          my.alert({
            content: res,
          });
        },
      });
    }
  },
});
