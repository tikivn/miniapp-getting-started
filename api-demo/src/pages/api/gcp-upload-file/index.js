Page({
  data: {
    url: undefined,
  },
  onUploadFile() {
    my.chooseImage({
      count: 1,
      success: (res) => {
        const filePath = res.filePaths[0];
        const fileName = filePath.split('/').pop();
        my.gcp.uploadFile({
          url: 'https://httpbin.org/put',
          fileType: 'image/jpeg',
          fileName,
          filePath,
          success: (res) => {
            console.log(res);
            my.alert({ title: 'Upload success' });
          },
          fail: function (res) {
            console.log(res);
            my.alert({ title: 'Upload fail', content: JSON.stringify(res) });
          },
        });
      },
    });
  },
});
