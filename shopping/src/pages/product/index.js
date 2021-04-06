import query from 'query-string';

Page({
  data: {
    product: null,
  },
  onLoad(e) {
    const params = query.parse(e);
    my.request({
      url: `https://fakestoreapi.com/products/${params.id}`,
      method: 'GET',
      success: (product) => this.setData({ product })
    })
  }
})
