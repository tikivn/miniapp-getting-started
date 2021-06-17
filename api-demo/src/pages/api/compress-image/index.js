Page({
  data: {
    tempFilePath: undefined,
    compressedFilePath: undefined,
  },
  onChooseImage() {
    my.chooseImage({
      count: 1,
      success: (res) => {
        console.log(res);
        this.setData({
          tempFilePath: res.filePaths[0],
        });
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
  onSaveImage() {
    my.saveImage({
      url: "https://kenh14cdn.com/zoom/220_289/203336854389633024/2021/6/15/photo1623744422488-16237444226352085440032.png",
      success: (res) => {
        console.log(res);
        my.alert({ title: "Saved", content: `File path ${res.filePath}` });
        this.setData({
          savedFilePath: res.filePath,
        });
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
  onCompressImage() {
    my.compressImage({
      filePaths: [this.data.tempFilePath],
      compressLevel: 0,
      success: (res) => {
        console.log(res);
        my.alert({
          title: "Compressed",
          content: `File path ${res.filePaths}`,
        });
        this.setData({
          compressedFilePath: res.filePaths[0],
        });
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
  onGetImageInfo() {
    my.getFileInfo({
      filePath: this.data.tempFilePath,
      success: (res) => {
        console.log(res);
        my.alert({ title: "File Info", content: JSON.stringify(res) });
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
  onGetCompressedImageInfo() {
    my.getFileInfo({
      filePath: this.data.compressedFilePath,
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
