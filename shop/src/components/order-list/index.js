Component({
  isCreated: false,

  data: {
    _products: [],
    price: 0,
    total: 0,
  },

  props: {
    shippingFee: 0,
    promotion: 0,
    products: [],
    onChangeTotal: () => {},
  },

  methods: {
    removeOrder() {
      const { _products } = this.data;
      const position = _products.findIndex(
        (item) => item.id === this.selectedProduct.id
      );
      if (position !== -1)
        this.setData({
          _products: [
            ..._products.slice(0, position),
            ..._products.slice(position + 1),
          ],
        });

      this.calculatePrices();
      this.hideModal();
    },

    _onChangeQuantityOrder(product, quantity) {
      const { _products } = this.data;
      const position = _products.findIndex((item) => item.id === product.id);
      if (position !== -1) {
        _products[position].quantity = quantity;
        this.setData({
          _products: [..._products],
        });
      }
      this.calculatePrices();
    },

    calculatePrices() {
      const { shippingFee, promotion, onChangeTotal } = this.props;
      const price = this.data._products.reduce((acc, curr) => {
        return acc + +curr.price * +curr.quantity;
      }, 0);
      const total = price > 0 ? price + shippingFee - promotion : 0;
      this.setData({
        price,
        total,
      });
      onChangeTotal(total);
    },

    confirmRemoveOrder(product) {
      this.selectedProduct = product;
      this.setData({
        modal: {
          isShow: true,
          headers: ['Confirmation'],
          descriptions: ['Do you want to remove this product from your cart?'],
          confirmButton: 'Yes',
          cancelButton: 'No',
        },
      });
    },

    hideModal() {
      this.setData({
        modal: {
          isShow: false,
        },
      });
    },
  },

  // Life cycle
  deriveDataFromProps(nextProps) {
    if (!this.isCreated && nextProps.products.length) {
      this.setData({
        _products: nextProps.products,
      });
      this.isCreated = true;
    }
    this.calculatePrices();
  },
});
