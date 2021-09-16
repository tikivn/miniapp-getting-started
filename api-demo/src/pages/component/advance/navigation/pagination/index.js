
Page({
  data: {
    fullPage: {
      currentPage: 1,
      items: Array.from(Array(5).keys()).map(i => `Page ${i+1}`),
    },
    numberOnly: {
      currentPage: 1,
      items: Array.from(Array(100).keys()).map(i => `Page ${i+1}`),
    }
  },
  onFullPageChange(page) {
    const newData = { ...this.data };
    newData.fullPage.currentPage = page;
    this.setData(newData);
  },

  onNumberOnlyChange(page) {
    const newData = { ...this.data };
    newData.numberOnly.currentPage = page;
    this.setData(newData);
  }

});
