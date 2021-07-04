import query from "query-string";

import { getProducts, getProductDetail } from "../../services/products";

const app = getApp();

Page({
  data: {
    product: null,
    similarProducts: [],
    similarLoading: true,
    similarLoadmore: false,
  },
  countLoadMore: 0,
  async onLoad(e) {
    const params = query.parse(e);
    this.getProduct(params.id);
    this.getSimilarProducts();
  },
  async getProduct(id) {
    const product = await getProductDetail(id);
    this.setData({ product });
  },
  async getSimilarProducts() {
    this.setData({ similarLoading: true });
    const rs = await getProducts();
    this.setData({ similarProducts: rs.data, similarLoading: false });
  },
  async loadMoreSimilarProducts() {
    if (this.countLoadMore < 5) {
      this.countLoadMore += 1;
      this.setData({ similarLoadmore: true });
      const rs = await getProducts();
      this.setData({
        similarProducts: this.data.similarProducts.concat(rs.data),
        similarLoadmore: false,
      });
    }
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
