Component({
  data: {
    isShowOption: true,
  },

  props: {
    className: '',
    isLoading: true,
    product: {
      id: '',
      name: '',
      image: '',
      price: 0,
      list_price: 0,
      discount_rate: 0,
    },
  },

  methods: {},

  // Life cycle
  didMount() {},
});
