Page({
  data:{
    orderId:undefined,
  },
  orderIdChange(e){
    this.setData({
      orderId:e.detail.value,
    })
  },
  doPayment() {
    my.getAuthCode({
      scope: [],
      success: (res) => {
        my.makePayment({
          orderId: this.data.orderId,
          success: (res) => {
            my.alert({ title: 'payment', content: res });
          },
          fail:(e)=>{
            my.alert({title:'Make payment fail', content:JSON.stringify(e)})
          }
        });
      }
    });
  }
});
