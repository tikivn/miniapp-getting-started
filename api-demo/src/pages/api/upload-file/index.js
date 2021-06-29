Page({
  data: {
    url: undefined,
  },
  onUploadFile() {
    my.chooseImage({
      count: 1,
      success: (res) => {
        const path = res.filePaths[0];
        console.log(path);
        my.uploadFile({
          url: "https://httpbin.org/post",
          fileType: "image/jpeg",
          fileName: "file",
          filePath: path,
          success: (res) => {
            console.log(res);
            my.alert({ title: "Upload success" });
          },
          fail: function (res) {
            console.log(res);
            my.alert({ title: "Upload fail", content: JSON.stringify(res) });
          },
        });
      },
    });
  },
});
