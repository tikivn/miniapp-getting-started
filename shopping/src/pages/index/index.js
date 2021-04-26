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
      url: 'https://tiki.vn/api/v2/home/banners/v2',
      method: 'GET',
      headers: {
        'User-Agent': 'TikiNative'
      },
      success: (response) => {
        console.log('Product Reponse: ', response)
        this.setData({ banners: response.data, loading: false });
      },
      fail: (fail) => {
        console.log('Fail', fail);
      }
    });

    // Get categories
    my.request({
      url: 'https://tiki.vn/api/v2/categories?parent_id=2&include_in_menu=true',
      method: 'GET',
      headers: {
        'User-Agent': 'TikiNative'
      },
      success: (response) => {
        console.log('Categories Reponse: ', response)
        const categories = response.data.map(
          item => ({ title: item.name, ...item, loading: true, products: [] })
        );
        console.log('categories :>> ', categories);
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
    const {title, id} = this.data.categories[catIndex];

    my.request({
      url: `https://tiki.vn/api/v2/products?limit=12&is_mweb=1&aggregations=1&categoryId=${id}&category=${id}&page=1`,
      method: 'GET',
      headers: {
        'User-Agent': 'TikiNative'
      },
      success: (response) => {
        console.log(`Product of category ${title}`, response.data);
        const categories = this.data.categories.map(
          (item, catIdx) => catIdx === catIndex 
            ? {...item, products: response.data, loading: false} 
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
