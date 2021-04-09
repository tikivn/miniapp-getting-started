import query from 'query-string';

Page({
  data: {
    product: null,
  },
  onLoad(e) {
    console.log('onLoad Product: ', e);
    const params = query.parse(e);
    console.log('params', params);

    // Get product detail
    my.request({
      url: `https://fakestoreapi.com/products/${params.id}`,
      method: 'GET',
      success: (product) => this.setData({ product })
    })
  }
})
