Page({
  onScan() {
    my.scan({
      success: (res) => {
        console.log(res);
        my.alert({ title: 'Found', content: JSON.stringify(res) });
      },
      fail: (e) => {
        my.alert({ title: 'Error', content: JSON.stringify(e) });
      },
    });
  },
});
