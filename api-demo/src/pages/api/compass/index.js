Page({
  offCompass() {
    if (my.canIUse('offCompassChange')) {
      my.offCompassChange({
        fail: (res) => {
          console.log(res);
        }
      });
    }
  },
  onCompass() {
    if (my.canIUse('onCompassChange')) {
      my.onCompassChange({
        fail: (res) => {
          console.log(res);
        }
      });
    }
  },
});
