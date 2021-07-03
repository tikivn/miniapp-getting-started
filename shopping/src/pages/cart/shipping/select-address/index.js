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

    this.setData({ address, selectedAddress: recentAddress });
  },
  methods: {
    hideBottomSheet() {
      this.props.onHide();
    },
    onSelect(event) {
      this.setData({ selectedAddress: event.target.dataset.item });
      console.log("event :>> ", event);
    },
    addNewAddress() {
      my.navigateTo({ url: "pages/address/index" });
    },
    editAddress(event) {
      my.navigateTo({
        url: `pages/address/index?id=${event.target.dataset.item.id}`,
      });
    },
  },
});
