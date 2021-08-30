Page({
  alert(message) {
    my.alert({
      title: 'response',
      content: JSON.stringify(message),
      buttonText: 'OK',
    });
  },
  choosePhoneContact() {
    my.choosePhoneContact({
      success: (success) => {
        this.alert(JSON.stringify(success));
      },
      fail: (fail) => {
        this.alert(JSON.stringify(fail));
      },
    });
  },
});
