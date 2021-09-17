Component({
  data: {
    isShowOption: true
  },

  props: {
    isLoading: true,
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
  },
});
