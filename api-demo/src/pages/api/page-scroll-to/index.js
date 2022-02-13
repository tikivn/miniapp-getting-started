Page({
  data: {
    scrollTop: 0,
  },
  scrollTopChange(e) {
    this.setData({
      scrollTop: e.detail.value,
    });
  },
  scrollTo() {
    my.pageScrollTo({
      scrollTop: parseInt(this.data.scrollTop),
      duration: 500,
      // selector: '#miniapp_demo',
      success: (res) => {
        // my.alert({
        //   title: `Result: ${JSON.stringify(res)}`,
        // });
        // console.log(`${JSON.stringify(res)}`);
      },
    });
  },
});