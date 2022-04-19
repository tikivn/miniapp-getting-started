import { $page } from "@tiki.vn/redux-miniprogram-bindings";

import { getAllStore, changeDefaultStore } from "../../store/actions/store";
import { navigateTo } from "../../helper";

import { search } from "./helper";

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
    my.setNavigationBar({ title: "Stores" });
    if (this.data.stores.status === "LOADING") {
      await this.getAllStore();
    }
    this.setData({
      status: "SUCCESS",
      searchResult: this.data.stores.data,
    });
  },
  onStoreSelect(e) {
    const id = e.target.dataset.id;
    this.changeDefaultStore(id);
    navigateTo("store-detail", { id });
  },
  onSearchInput(e) {
    const { value } = e.detail;
    this.setData({
      searchValue: value,
    });
    this.onSearch(value);
  },
  onClearInput(e) {
    this.setData({
      searchValue: "",
    });
    this.setData({
      searchResult: this.data.list.data,
    });
  },
  onSearch(value) {
    const searchResult = search(this.data.stores.data, value);
    this.setData({
      searchResult,
    });
  },
});
