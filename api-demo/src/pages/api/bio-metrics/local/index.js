Page({
  data: {
    key: '',
    data: '',
  },
  localAuth() {
    my.bioMetrics.localAuth({
      content: 'Sign in',
      success: () => {
        my.alert({ title: 'Success', content: `Authenticated!` });
      },
      fail: (res) => {
        my.alert({ title: 'Fail', content: JSON.stringify(res) });
      },
    });
  },
});
