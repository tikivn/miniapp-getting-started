const order = ['blue', 'red', 'green', 'yellow'];

Page({
  data: {
    toView: 'red',
    scrollTop: 100,
  },
  onLoad() {
  },
  upper(e) {
    console.log('upper', e);
  },
  lower(e) {
    console.log('lower', e);
  },
  scroll(e) {
    console.log('scroll', e);
    // this.setData({
    //   scrollTop: e.detail.scrollTop,
    // });
  },
  scrollToTop(e) {
    console.log(e);
    this.setData({
      scrollTop: 0,
    });
  },
  tap() {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        const next = (i + 1) % order.length;
        this.setData({
          toView: order[next],
          scrollTop: next * 200,
        });
        break;
      }
    }
  },
  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10,
    });
  },
});
