Page({
  onCheckLatestVersion() {
    my.askDownloadNewClient({
      success: (res) => {
        console.log(res);
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
});
