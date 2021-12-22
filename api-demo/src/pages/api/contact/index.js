Page({
  data: {
    photoFilePath: '/sdcard/DCIM/Camera/a.jpg',
    nickName: 'tinniapp',
    lastName: 'Last',
    middleName: 'Middle',
    firstName: 'First',
    remark: 'this is remark',
    mobilePhoneNumber: '13800000000',
    homePhoneNumber: '11111115',
    workPhoneNumber: '11111112',
    homeFaxNumber: '11111114',
    workFaxNumber: '11111111',
    hostNumber: '11111113',
    weChatNumber: 'liuhuo',
    alipayAccount: 'alipay@alipay.com',
    addressCountry: 'US',
    addressState: 'California',
    addressCity: 'San Francisco',
    addressStreet: 'Mountain View',
    addressPostalCode: '94016',
    workAddressCountry: 'China',
    workAddressState: 'Zhejiang',
    workAddressCity: 'Hangzhou',
    workAddressStreet: 'Tianmushan Road',
    workAddressPostalCode: '361005',
    homeAddressCountry: 'Canada',
    homeAddressState: 'Ontairo',
    homeAddressCity: 'Toronto',
    homeAddressStreet: 'No.234 Road',
    homeAddressPostalCode: '123456',
    organization: 'AntFin',
    title: 'Developer',
    email: 'liuhuo01@sina.com',
    url: 'www.alipay.com',
    success: (res) => {
      my.alert({
        title:"Success",
        content: 'addPhoneContact response: ' + JSON.stringify(res),
      });
    },
    fail: (res) => {
      my.alert({
        title:"Fail",
        content: 'addPhoneContact response: ' + JSON.stringify(res),
      });
    },
  },
  alert(message) {
    my.alert({
      title: 'response',
      content: JSON.stringify(message),
      buttonText: 'OK',
    });
  },

  onInput(e) {
    this.data[e.currentTarget.id] = e.detail.value;
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
  addPhoneContact() {
    if (my.canIUse('addPhoneContact')) {
      my.addPhoneContact(this.data);
    }
  },
});
