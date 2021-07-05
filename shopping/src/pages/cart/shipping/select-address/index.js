import { getAddress, getRecentAddress } from "../../../../utils/storage";

Component({
  props: {
    onHide: () => {},
  },
  data: {
    address: [],
    recentAddress: null,
    selectedAddress: null,
    didMount: false,
  },
  async didMount() {
    const [address, recentAddress] = await Promise.all([
      getAddress(),
      getRecentAddress(),
    ]);

    this.setData({ address, selectedAddress: recentAddress, recentAddress });
  },
  methods: {
    hideBottomSheet() {
      this.props.onHide();
    },
    onSelect(event) {
      this.setData({ selectedAddress: event.target.dataset.item });
    },
    addNewAddress() {
      my.navigateTo({ url: "pages/address/index" });
      this.hideBottomSheet();
    },
    editAddress(event) {
      my.navigateTo({
        url: `pages/address/index?id=${event.target.dataset.item.id}`,
      });
      this.hideBottomSheet();
    },
    submit() {
      const { recentAddress, selectedAddress } = this.data;
      if (recentAddress.id !== selectedAddress.id) {
        this.props.onSelect(selectedAddress);
      }
    },
  },
});
