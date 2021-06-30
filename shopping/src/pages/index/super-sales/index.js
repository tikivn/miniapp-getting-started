Component({
  data: {
    loading: true,
    products: [],
  },
  didMount() {
    // Get sales
    my.request({
      url: "https://tiki.vn/api/v2/landingpage/products?urlKey=nhap-bkgiam30-giam-them-30-toi-da-100k-cho-dh-tu-299k&categoryId=52942&category=52942&limit=4&page=1",
      method: "GET",
      headers: {
        "User-Agent": "TikiNative",
      },
      success: (response) => {
        this.setData({ products: response.data, loading: false });
      },
      fail: (fail) => {
        this.setData({ loading: false });
        console.log("Fail", fail);
      },
    });
  },
});
