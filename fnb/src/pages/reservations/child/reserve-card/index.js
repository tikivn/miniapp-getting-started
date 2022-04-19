import { delay } from '../../../../helper';

Component({
  props: {
    isLoading: false,
    isShowModal: false,
    reserve: null,
    onSelect: () => {},
    onCancelBooking: () => {},
    onHideModal() {},
    onConfirmCancelBooking() {},
  },
  methods: {
    onSelect() {
      const { onSelect, reserve } = this.props;
      onSelect(reserve);
    },
    async onConfirmCancel() {
      const { onConfirmCancelBooking, reserve } = this.props;
      this.setData({ isShowModal: false });
      await delay(200);
      onConfirmCancelBooking(reserve);
    },

    onCancel() {
      this.props.onCancelBooking();
      this.setData({ isShowModal: true });
    },

    onCloseModal() {
      this.props.onHideModal();
      this.setData({ isShowModal: false });
    },
    onMaskClick() {
      this.props.onHideModal();
      this.setData({ isShowModal: false });
    },
    onPhoneCall() {
      my.makePhoneCall({ number: this.props.reserve.store.phone });
    },
  },
});
