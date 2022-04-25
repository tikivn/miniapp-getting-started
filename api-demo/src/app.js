const FirstPage = 'pages/component/index';

App({
  currentPage: FirstPage,
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
