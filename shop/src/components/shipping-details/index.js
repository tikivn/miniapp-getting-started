Component({
  props: {
    isLoading: false,
    buyer: {
      avatar: '',
      address: '',
      name: '',
      phone: '',
    },
    seller: {
      avatar: '',
      name: '',
      description: '',
    },
  },
  methods: {
    _onOpenAddress() {
      my.getAddress({
        success: (res) => {
          console.log('address: ', res);
        },
        fail: (res) => {},
      });
    },
  },
});
