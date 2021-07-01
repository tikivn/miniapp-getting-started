Page({
  onLoad() {
    // Get categories
    my.request({
      url: "https://tiki.vn/api/v2/categories?parent_id=2&include_in_menu=true",
      method: "GET",
      headers: {
        "User-Agent": "TikiNative",
      },
      success: (response) => {
        console.log("Categories Reponse: ", response);
        const categories = response.data.map((item) => ({
          title: item.name,
          ...item,
          loading: true,
          products: [],
        }));
        console.log("categories :>> ", categories);
        this.setData({ categories }, () => this.getProductByCategory(0));
      },
    });
  },
  getProductByCategory(catIndex) {
    const { title, id } = this.data.categories[catIndex];

    my.request({
      url: `https://tiki.vn/api/v2/products?limit=12&is_mweb=1&aggregations=1&categoryId=${id}&category=${id}&page=1`,
      method: "GET",
      headers: {
        "User-Agent": "TikiNative",
      },
      success: (response) => {
        console.log(`Product of category ${title}`, response.data);
        const categories = this.data.categories.map((item, catIdx) =>
          catIdx === catIndex
            ? { ...item, products: response.data, loading: false }
            : item
        );
        this.setData({ categories });
      },
    });
  },
  onTabChange(e) {
    if (this.data.categories[e.detail.index].products.length) {
      return;
    }

    // Get products
    this.getProductByCategory(e.detail.index);
  }
});
