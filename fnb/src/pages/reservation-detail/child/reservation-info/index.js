Component({
  props: {
    reserve: {},
    onPhoneCall: () => {},
  },
  data: {
    imageList: {
      reserved: "/assets/rs_reserved.png",
      past: "/assets/rs_past.png",
      canceled: "/assets/rs_canceled.png",
    },
  },
  methods: {
    onContactSupport() {
      const { reserve, onPhoneCall } = this.props;
      onPhoneCall(reserve.store.phone);
    },
  },
});
