Component({
  props: {
    onCancel: () => {},
  },
  methods: {
    onCancelBooking() {
      this.props.onCancel();
    },
  },
});
