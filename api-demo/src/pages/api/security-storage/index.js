Page({
  data:{
    text: '',
    config:{
      authenticationPrompt: 'login with yourself',
      accessControl:'BIOMETRY_ANY_OR_DEVICE_PASSCODE',
    }
  },
  textChange(e){
    this.setData({
      text: e.detail.value,
    });
  },
  setStorage(){
    my.setEncryptedStorage({
      key: "session",
      value: this.data.text,
      config:  this.data.config,
      success: (res) => {
        my.alert({ title: 'success', });
      },
      fail: (res) => {
        my.alert({ title: 'Fail', content: JSON.stringify(res) });
      },
    });
  },
  getStorage(){
    my.getEncryptedStorage({
      key: "session",
      config: this.data.config,
      success: (res) => {
        my.alert({ title: 'success', content: JSON.stringify(res)});
      },
      fail: (res) => {
        my.alert({ title: 'Fail', content: JSON.stringify(res) });
      },
    });
  },
  removeStorage(){
    my.removeEncryptedStorage({
      key: "session",
      config: this.data.config,
      success: (res) => {
        my.alert({ title: 'success'});
      },
      fail: (res) => {
        my.alert({ title: 'Fail', content: JSON.stringify(res) });
      },
    });
  },
  getAllKeys() {
    my.getAllKeysEncryptedStorage({
      config: this.data.config,
      success: (res) => {
        my.alert({ title: 'success', content: JSON.stringify(res)});
      },
      fail: (res) => {
        my.alert({ title: 'Fail', content: JSON.stringify(res) });
      },
    });
  },
});
