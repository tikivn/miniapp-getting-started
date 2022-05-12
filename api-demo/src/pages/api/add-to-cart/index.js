Page({
  data: {
    productId: undefined,
    quantity: 0,
  },
  onLoad() {
    my.addIconsToNavigationBar({
      icons: [
        {
          image: '/images/cart.png',
          badge: '4'
        },
      ],
      padding: 10,
      success: (res) => {
        console.log(res);
      },
      fail: (res) => {
        console.log(res);
      },
    });
  },

  productIdChange(e) {
    this.setData({
      productId: e.detail.value,
      quantity: 1,
    });
  },
  onAddToCart() {
    my.addToCart({
      products: {
        productId: this.data.productId,
        quantity: 1,
      },
      success: (res) => {
        my.addIconsToNavigationBar({
          icons: [
            {
              image: '/images/cart.png',
              width: 25,
              height: 25,
              badge: `${this.data.quantity}`,
            },
          ],
          padding: 10,
          success: (res) => {
            console.log(res);
          },
          fail: (res) => {
            console.log(res);
          },
        });
      },
      fail: (res) => {
        console.log(res);
      },
    });
  },

  onCustomIconEvent(e) {
    console.log(e);
    my.openScreen({ screenCode: 'TK_CART' });
  },
});
