Component({
  props: {
    address: null,
    quotes: null,
    // address:
    //   "Tòa nhà Viettel Complex, 285 Cách Mạng Tháng 8, Phường 12, Quận 10, Hồ Chí Minh",
    // user: {
    //   name: "Hung Nguyen",
    //   phone: "0382442107",
    // },
    // shipping: {},
  },
  didMount() {
    // Get from storage to get address
  },
  methods: {
    onTapAddress() {
      if (!this.props.address) {
        my.navigateTo({ url: "pages/address/index" });
      }
    },
  },
});
