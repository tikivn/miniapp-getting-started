import { $page } from "@tiki.vn/redux-miniprogram-bindings";

import { getAllStore, changeDefaultStore } from "../../store/actions/store";
import { navigateTo } from "../../helper";

$page({
  mapState: [
    (state) => ({
      stores: state.store.list,
    }),
  ],
  mapDispatch: { getAllStore, changeDefaultStore },
})({
  data: {
    status: "LOADING",
  },
  async onLoad(query) {
    my.setNavigationBar({ title: "Select store" });
    if (this.data.stores.status === "LOADING") {
      await this.getAllStore();
    }
    this.setData({
      status: "SUCCESS",
    });
  },
  onStoreSelect(e) {
    this.changeDefaultStore(e.target.dataset.id);
    my.navigateBack();
  },
  onInputFocus() {
    navigateTo("store-search", { next: "delivery" });
  },
});
