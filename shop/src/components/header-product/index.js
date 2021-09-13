import { moneyFormatter } from '../../utils/common';

Component({
  data: {
    formattedPrice: '',
    formattedListPrice: '',
    isShowOption: true
  },

  props: {
    product: {
      id: '',
      name: '',
      image: '',
      price: 0,
      listPrice: 0,
      discountRate: 0,
    },
  },

  methods: {
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
