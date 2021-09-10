Page({
  data: {
    buyer: {
      avatar: '/assets/icons/location.svg',
      address: '288 Erie Street South Unit D, Leamington, Ontario',
      name: 'Nick',
      phone: '0969696969',
    },
    seller: {
      avatar: '/assets/images/tiki-now.png',
      name: 'Tiki Now',
      description: 'Same day 2h - 3h',
    },
    orderedProducts: [
      {
        id: '1',
        thumbnail: '/assets/images/product.png',
        name: 'Sample product 1',
        price: 15000,
        quantity: 1,
      },
      {
        id: '2',
        thumbnail: '/assets/images/product.png',
        name: 'Sample product 2',
        price: 50000,
        quantity: 1,
      },
    ],
    shippingFee: 20000,
    total: 0,
    modal: {
      isShow: false,
      headers: [],
      descriptions: [],
      confirmButton: '',
      cancelButton: '',
    },
  },

  onChangeTotal(total) {
    this.setData({
      total,
    });
  },
});
