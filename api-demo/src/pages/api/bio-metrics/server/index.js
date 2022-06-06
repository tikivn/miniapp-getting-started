Page({
  data: {
    username: 'test@gmail.com',
    password: 'test',
  },
  createKey() {
    my.bioMetrics.createKey({
      success: ({ publicKey }) => {
        my.alert({ title: 'Success', content: `Public Key:${publicKey}` });
      },
      fail: (res) => {
        my.alert({ title: 'Fail', content: JSON.stringify(res) });
      },
    });
  },
  deleteKey() {
    my.bioMetrics.deleteKey({
      success: () => {
        my.alert({ title: 'Success', content: `Key is deleted` });
      },
      fail: (res) => {
        my.alert({ title: 'Fail', content: JSON.stringify(res) });
      },
    });
  },
  keyExists() {
    my.bioMetrics.keyExists({
      success: () => {
        my.alert({ title: 'Success', content: `Key is deleted` });
      },
      fail: (res) => {
        my.alert({ title: 'Fail', content: JSON.stringify(res) });
      },
    });
  },
  createSignature() {
    const payload = `${new Date().getTime()}-${this.data.username}/${this.data.password}`;
    my.bioMetrics.createSignature({
      content: 'Login using Biometrics',
      challenge: payload,
      success: (res) => {
        my.alert({ title: 'Success', content: JSON.stringify(res) });
      },
      fail: (res) => {
        my.alert({ title: 'Fail', content: JSON.stringify(res) });
      },
    });
  },
});
