Page({
  data: {
    key: "",
    data: "",
  },

  keyChange(e) {
    console.log(e);
    this.setData({
      key: e.detail.value,
    });
  },

  dataChange(e) {
    this.setData({
      data: e.detail.value,
    });
  },

  getStorage() {
    var key = this.data.key;
    var data = this.data.data;
    if (key.length === 0) {
      this.setData({
        key: key,
        data: data,
      });

      my.alert({
        title: "Error",
        content: "Please input key",
      });
    } else {
      my.getStorage({
        key,
        success(res) {
          my.alert({
            title: "Success",
            content: "data: '" + JSON.stringify(res.data) + "'",
          });
        },
      });
    }
  },

  setStorage() {
    var key = this.data.key;
    var data = this.data.data;
    if (key.length === 0) {
      this.setData({
        key: key,
        data: data,
      });

      my.alert({
        title: "Error",
        content: "Please input key",
      });
    } else {
      let that = this;
      my.setStorage({
        key: key,
        data: data,
        success() {
          that.setData({
            key: key,
            data: data,
          });

          my.alert({
            title: "Success",
            content: `${key}: ${data}`,
          });
        },
      });
    }
  },

  removeStorage() {
    let that = this;
    my.removeStorage({
      key: that.data.key,
      success() {
        that.setData({
          key: "",
          data: "",
        });

        my.alert({
          title: "Remove data successful",
          content: "",
        });
      },
    });
  },
  clearStorage() {
    my.clearStorage(
      my.alert({
        title: "Clear data successful",
        content: "",
      })
    );
  },
  getStorageInfo() {
    let that = this;
    my.getStorageInfo({
      success(res) {
        my.alert({
          content: JSON.stringify({
            keys: res.keys,
            currentSize: res.currentSize,
            limitSize: res.limitSize,
          }),
        });
      },
    });
  },
});
