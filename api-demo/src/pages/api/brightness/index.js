Page({
  data: {
    status: false,
    brightness: 0,
  },
  onLoad() {
    my.getScreenBrightness({
      success: (res) =>
        this.setData({
          brightness: res.brightness,
        }),
    });
  },
  switchKeepScreenOn(e){
    my.setKeepScreenOn({
      keepScreenOn: e.detail.value,
      success: () => {
        this.setData({
          status: e.detail.value,
        })
      },
      fail: (res) => {
        my.alert({ title: 'Fail', content: JSON.stringify(res) });
      },
    })
  },
  sliderChange(e) {
    const _value = e.detail.value / 100;
    my.setScreenBrightness({
      brightness: _value,
      success: (res) => {
        this.setData({
          brightness: _value,
        });
      },
    });
  },
  onGetBrightness() {
    my.getScreenBrightness({
      success: (res) => {
        my.alert({ title: 'Success', content: 'Độ sáng màn hình hiện tại:' + res.brightness });
      },
      fail: (res) => {
        my.alert({ title: 'Fail', content: JSON.stringify(res) });
      },
    });
  },
});
