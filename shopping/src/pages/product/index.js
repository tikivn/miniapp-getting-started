import query from "query-string";

const app = getApp();

Page({
  data: {
    product: null,
  },
  onLoad(e) {
    const params = query.parse(e);
    // const params = {id: 76404389}
    console.log("params", params);

    // Get product detail
    my.request({
      url: `https://tiki.vn/api/v2/products/${params.id}`,
      method: "GET",
      headers: {
        "User-Agent": "TikiNative",
      },
      success: (product) => {
        console.log("product", product);
        this.setData({ product });
      },
    });
  },
  onAddCart() {
    app.onAppAddCart(this.data.product);

    // Show toast
    my.showToast({
      type: "success",
      content: "Sản phẩm đã được thêm vào giỏ hàng",
      buttonText: "OK",
      duration: 3000,
    });

    // Set TabBar Badge
    my.setTabBarBadge({
      index: 1,
      text: app.cart.count,
    });
  },
});
