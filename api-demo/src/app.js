const FirstPage = 'pages/component/index';

App({
  currentPage: FirstPage,
  onLaunch() {},
  onShow() {},
  onError(e) {
    console.log(e);
  },
  onShareAppMessage() {
    const path = this.currentPage === FirstPage ? '' : `?page=${this.currentPage}`;
    return {
      path,
    };
  },
});
