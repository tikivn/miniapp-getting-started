import { moneyFormatter } from '../../utils/common';

Component({
  data: {
    formattedPrice: '',
    formattedListPrice: '',
  },

  props: {
    className: '',
    isLoading: false,
    product: {
      id: '',
      name: '',
      image: '',
      price: '',
      listPrice: '',
      discountRate: 0,
    },
    onTapProduct: () => {},
  },

  methods: {
    _onTapProduct() {
      this.props.onTapProduct(this.props.product);
    },
  },

  // Life cycle
  didMount() {
    const { price, listPrice } = this.props.product;

    this.setData({
      formattedPrice: moneyFormatter(price, ' ₫'),
      formattedListPrice:
        price < listPrice ? moneyFormatter(listPrice, ' ₫') : '',
    });
  },
});
