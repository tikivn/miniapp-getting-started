Page({
  data: {
    networkType: null,
    liveNetworkType: null,
    networkStatusChangeCallback:null,
    isObservingNetworkStatus:false,
  },
  onGetNetworkType() {
    my.getNetworkType({
      success: (res) => {
        this.setData({ networkType: res });
        my.alert({ title: 'Success', content: JSON.stringify(res) });
      },
      fail: (e) => {
        my.alert({ title: 'Fail', content: JSON.stringify(e) });
      },
    });
  },
  toggleObservingNetworkStatus(){
    if(!this.data.isObservingNetworkStatus){
      const callback = (networkType)=>{
        this.setData({ liveNetworkType: JSON.stringify(networkType) });
      }
      this.setData({ networkStatusChangeCallback:callback, isObservingNetworkStatus:true})
      my.onNetworkStatusChange(callback)
    }else{
      my.offNetworkStatusChange(this.data.networkStatusChangeCallback)
      this.setData({ 
        networkStatusChangeCallback:null,
        isObservingNetworkStatus:false,
        liveNetworkType: null,
      })
    }
  }
});
