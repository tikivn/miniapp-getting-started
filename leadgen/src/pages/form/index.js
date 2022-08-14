Page({
  data: {
    forms: [],
  },
  onShow() {
    this.getForms();
  },
  getForms() {
    if (!my.leadgen) {
      return;
    }
    my.leadgen.listCustomerResponses({
      size: 10,
      page: 1,
      success: (res) => {
        this.setData({ forms: res.items });
      },
    });
  },
});
