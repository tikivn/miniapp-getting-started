Page({
  data: {
    photoFilePath: '/sdcard/DCIM/Camera/a.jpg',
    nickName: 'tinniapp',
    lastName: 'Last',
    middleName: 'Middle',
    firstName: 'First',
    remark: 'remark',
    mobilePhoneNumber: '13800000000',
    homePhoneNumber: '11111115',
    workPhoneNumber: '11111112',
    homeFaxNumber: '11111114',
    workFaxNumber: '11111111',
    hostNumber: '11111113',
    weChatNumber: 'liuhuo',
    alipayAccount: 'tiki.vn',
    addressCountry: 'Viet Name',
    addressState: 'Q.10',
    addressCity: 'HCM',
    addressStreet: 'CMT8',
    addressPostalCode: '94016',
    workAddressCountry: 'Viet Name',
    workAddressState: 'Q.10',
    workAddressCity: 'HCM',
    workAddressStreet:  'CMT8',
    workAddressPostalCode: '361005',
    homeAddressCountry: 'Viet Name',
    homeAddressState: 'Binh Duong',
    homeAddressCity: 'Thuan An',
    homeAddressStreet: 'Nguyen Huu Canh',
    homeAddressPostalCode: '123456',
    organization: 'Tiki',
    title: 'Developer',
    email: 'liuhuo01@tiki.vn',
    url: 'www.tiki.vn',
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

  getAllContacts(){
    my.getAllContacts({
      scope:["phone"],
      success: (success) => {
        this.alert(JSON.stringify(success));
      },
      fail: (fail) => {
        this.alert(JSON.stringify(fail));
      },
    });
  }
});
