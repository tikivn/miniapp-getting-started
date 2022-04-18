Component({
  props: {
    onClose() {},
    store: {
      name: "",
      phone: "",
      address: "",
    },
  },
  methods: {
    onClose() {
      this.props.onClose();
    },
    onPhoneCall() {
      my.makePhoneCall({
        number: this.props.store.phone,
        success: (res) => {},
        fail: (e) => {},
      });
    },
  },
});
