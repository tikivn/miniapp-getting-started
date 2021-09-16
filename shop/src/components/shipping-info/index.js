Component({
  props: {
    isLoading: true,
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
