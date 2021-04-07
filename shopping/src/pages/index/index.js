const app = getApp();

Page({
  data: {
    bannerWidth: 0,
    windowWidth: 0,
    imageWidth: 0,
    loading: true,
    cellSpacing: 12,
    categories: [],
    banners: []
  },
  onLoad() {
    // Get banners
    my.request({
      url: 'https://fakestoreapi.com/products',
      method: 'GET',
      success: (response) => {
        console.log('Product Reponse: ', response)
        this.setData({ banners: response, loading: false });
      },
      fail: (fail) => {
        console.log('Fail', fail);
      }
    });

    // Get categories
    my.request({
      url: 'https://fakestoreapi.com/products/categories',
      method: 'GET',
      success: (response) => {
        console.log('Categories Reponse: ', response)
        const categories = response.map(
          item => ({ title: item, loading: true, products: [] })
        );
        this.setData({ categories }, () => this.getProductByCategory(0));
      },
    });

    // Get size
    my.getSystemInfo({
      success: (info) => {
        console.log('System info: ', info);
        this.setData({ 
          bannerWidth: info.windowWidth - this.data.cellSpacing * 2,
          windowWidth: info.windowWidth,
          imageWidth: info.windowWidth / 2 - this.data.cellSpacing * 2,
        })
      }
    });
  },
  getProductByCategory(catIndex) {
    const catTitle = this.data.categories[catIndex].title;

    my.request({
      url: `https://fakestoreapi.com/products/category/${catTitle}`,
      method: 'GET',
      success: (response) => {
        console.log(`Product of category ${catTitle}`, response);
        const categories = this.data.categories.map(
          (item, catIdx) => catIdx === catIndex 
            ? {...item, products: response, loading: false} 
            : item 
        );
        this.setData({ categories });
      }
    });
  },
  onTabChange(e) {
    if (this.data.categories[e.detail.index].products.length) {
      return;
    }

    // Get products
    this.getProductByCategory(e.detail.index);
  },
  onPageAddCart(product) {
    app.onAppAddCart(product);

    // Show toast
    my.showToast({
      type: 'success',
      content: 'Sản phẩm đã được thêm vào giỏ hàng',
      buttonText: 'OK',
      duration: 3000,
    });

    // Set TabBar Badge
    my.setTabBarBadge({
      index: 1,
      text: app.cart.count,
    });
  },
});
