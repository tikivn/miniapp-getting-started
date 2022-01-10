Page({ 
  onSetDoriUser() {
    my.setDoriUserInfo({
      userId: '1234',
      userName: 'acbd',
      success: () => {
        my.alert({
          title: `Ok`,
        });
      },
      fail: (res) => { 

      },
    });
  },
});
