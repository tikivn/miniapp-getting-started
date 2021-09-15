Component({
  isCreated: false,
  selectedProduct: {},

  data: {
    skeletonsArray: [],
  },

  props: {
    isLoading: false,
    shippingFee: 0,
    price: 0,
    total: 0,
    products: [],
    coupon: {},
    skeletons: 0,
    onChangeTotal: () => {},
    onRemoveProduct: () => {},
    onChangeQuantityProduct: () => {},
  },

  methods: {
    _onRemoveProduct() {
      this.props.onRemoveProduct(this.selectedProduct);
      this.hideModal();
    },

    _onChangeQuantityOrder(product, quantity) {
      this.props.onChangeQuantityProduct(product, quantity);
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
  didMount() {
    const { skeletons } = this.props;

    this.setData({
      skeletonsArray: [...Array(skeletons).keys()],
    });
  },
});
