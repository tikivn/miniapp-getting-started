Page({
  data: {
    tempFilePath: undefined,
    savedFilePath: undefined,
    urlFile: '',
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
  onSaveFile() {
    my.saveFile({
      filePath: this.data.tempFilePath,
      success: (res) => {
        console.log(res);
        my.alert({ title: 'Saved', content: `File path ${res.filePath}` });
        this.setData({
          savedFilePath: res.filePath,
        });
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
  onGetFileInfo() {
    my.getFileInfo({
      filePath: this.data.tempFilePath,
      success: (res) => {
        console.log(res);
        my.alert({ title: 'File Info', content: JSON.stringify(res) });
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
  onGetSavedFileInfo() {
    my.getSavedFileInfo({
      filePath: this.data.savedFilePath,
      success: (res) => {
        my.alert({
          title: 'Saved File Info',
          content: JSON.stringify(res),
        });
        console.log(JSON.stringify(res));
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
  onGetSavedFileList() {
    my.getSavedFileList({
      success: (res) => {
        my.alert({
          title: 'Saved File List',
          content: JSON.stringify(res),
        });
        console.log(JSON.stringify(res));
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
  onRemoveSavedFile() {
    my.getSavedFileList({
      success: (res) => {
        my.removeSavedFile({
          filePath: res.fileList[0].filePath,
          success: (res) => {
            my.alert({
              title: 'Remove file success',
              content: JSON.stringify(res),
            });
            console.log('remove success');
          },
          fail: (e) => {
            console.log(e);
          },
        });
      },
    });
  },
  onOpenFile() {
    my.showLoading({ content: "Loading..." });
    my.downloadFile({
      url: this.data.urlFile,
      success: (res) => {
        my.openDocument({
          filePath: res.filePath,
          fileType: 'pdf',
          success: (res) => {
            my.hideLoading();
          },
          fail: (e) => {
            my.hideLoading();
          },
        });
      },
      fail: (e) => {
        my.alert({ content: JSON.stringify(e) });
        my.hideLoading();
      },
    });
  },
  onChangeUrl(e) {
    this.setData({ urlFile: e.detail.value });
  },
});
