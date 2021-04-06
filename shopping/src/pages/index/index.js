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
        this.setData({ banners: response, loading: false });
      },
    });

    // Get categories
    my.request({
      url: 'https://fakestoreapi.com/products/categories',
      method: 'GET',
      success: (response) => {
        const categories = response.map(item => ({ title: item, loading: true, products: [] }));
        this.setData({ categories }, () => this.getProductByCategory(0));
      },
    });

    // Get size
    my.getSystemInfo({
      success: (info) => {
        this.setData({ 
          bannerWidth: info.windowWidth - this.data.cellSpacing * 2,
          windowWidth: info.windowWidth,
          imageWidth: info.windowWidth / 2 - this.data.cellSpacing * 2,
        })
      }
    });
  },
  getProductByCategory(index) {
    my.request({
      url: `https://fakestoreapi.com/products/category/${this.data.categories[index].title}`,
      method: 'GET',
      success: (response) => {
        const categories = this.data.categories.map((item, catIdx) => catIdx === index ? {...item, products: response, loading: false} : item );
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
    my.showToast({
      type: 'success',
      content: 'Sản phẩm đã được thêm vào giỏ hàng',
      buttonText: 'OK',
      duration: 3000,
    });
  },
});
