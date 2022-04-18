import { $page } from "@tiki.vn/redux-miniprogram-bindings";

import { navigateTo, redirectTo, debounce, delay } from "../../helper";
import { getAllStore } from "../../store/actions/store";
import { getBuyerInfo } from "../../store/actions/buyer";
import {
  resetCart,
  resetCoupon,
  applyCoupon,
  changeItemNumber,
  changePickupTime,
} from "../../store/actions/cart";

$page({
  mapState: [
    (state) => ({
      cart: state.cart,
      buyer: state.buyer,
      store: state.store.defaultStore,
    }),
  ],
  mapDispatch: {
    resetCart,
    getBuyerInfo,
    getAllStore,
    applyCoupon,
    resetCoupon,
    changeItemNumber,
    changePickupTime,
  },
})({
  data: {
    currentItem: "",
    status: "LOADING",
    currentModal: "", // remove_confirm, paymet_result, route_select
    isShowTimeSelect: false,
    isShowCouponInput: false,
  },
  async onLoad(query) {
    my.setNavigationBar({ title: "Cart" });

    await this.getBuyerInfo();
    await this.getAllStore();

    this.onChangeItemNumberInput = debounce(this.onChangeItemNumberInput, 100);
    this.setData({
      status: "SUCCESS",
    });
  },
  onBuyerAddressSelect() {
    navigateTo("address");
  },
  onStoreAddressSelect() {
    navigateTo("store-select");
  },
  onShowPaymentResultSelect() {
    this.setData({
      currentModal: "paymet_result",
    });
  },
  onPaymentSuccessSelect() {
    this.setData({
      currentModal: "route_select",
    });
  },
  onCloseModal() {
    this.setData({
      currentModal: "",
    });
  },
  onShoppingRouteSelect() {
    my.navigateBack({ delta: 2 });
  },
  onOrderListRouteSelect() {
    this.resetCart(this.data.orderMethod);
    redirectTo("orders-list");
  },
  onShowCouponInput() {
    this.setData({
      isShowCouponInput: true,
    });
  },
  onHideCouponInput() {
    this.setData({ isShowCouponInput: false });
  },
  onApplyCoupon(code) {
    this.applyCoupon(this.data.orderMethod, code);
  },
  onResetCoupon() {
    this.resetCoupon(this.data.orderMethod);
  },
  onChangeItemNumber(id, value, current) {
    if (value + current === 0) {
      this.setData({
        showModal: true,
        currentModal: "remove_confirm",
        currentItem: id,
      });
      return;
    }
    this.changeItemNumber(this.data.orderMethod, id, value + current);
  },
  onChangeItemNumberInput(id, value, current, ref) {
    let number = Number(value);
    number = !number ? 1 : number;
    number = number > 99 ? 99 : number;
    this.changeItemNumber(this.data.orderMethod, id, number);
  },
  async onConfirmDelete() {
    this.changeItemNumber(this.data.orderMethod, this.data.currentItem, 0);
    this.setData({
      showModal: false,
      currentModal: "",
    });
    if (this.data.cart.products.length === 1) {
      await delay(200);
      my.navigateBack();
    }
  },
  onCancelDelete() {
    this.setData({
      showModal: false,
      currentModal: "",
    });
  },
  onChangeTimePickup(time, date) {
    const [hour, min] = time.split(":");
    this.changePickupTime({ hour, min }, date);
    this.setData({ isShowTimeSelect: false });
  },
  onHideTimeSelect() {
    this.setData({ isShowTimeSelect: false });
  },
  onShowTimeSelect() {
    this.setData({ isShowTimeSelect: true });
  },
});
