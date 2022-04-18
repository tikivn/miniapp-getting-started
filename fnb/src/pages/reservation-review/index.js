import { $page } from "@tiki.vn/redux-miniprogram-bindings";

import { debounce, redirectTo } from "../../helper";
import { constants as c } from "../../constants";
import { getBuyerInfo } from "../../store/actions/buyer";
import { bookingTable } from "../../store/actions/reservation";

import { validate } from "./helper";

$page({
  mapState: [
    (state) => ({
      info: state.reservation.info.data,
      list: state.reservation.list,
      buyer: state.buyer,
    }),
  ],
  mapDispatch: { getBuyerInfo, bookingTable },
})({
  data: {
    paddingStatus: "",
    childrenNumber: 0,
    timer: 300,
    isHide: false,
    elderlyPeopleNumber: 0,
    smsReminder: false,
    isShowModal: false,
    contact: {
      name: "",
      phone: "",
      email: "",
    },
    note: "",
    area: "Any",
    areaList: ["Any", "Inside", "Outside"],
    errMsg: {
      name: "",
      phone: "",
      email: "",
    },
  },
  async onLoad(query) {
    my.setNavigationBar({ title: "Review information" });
    this.onNameInput = debounce(this.onNameInput, 300);
    this.onPhoneInput = debounce(this.onPhoneInput, 300);
    this.onEmailInput = debounce(this.onEmailInput, 300);
    if (this.data.buyer.status === c.LOADING) {
      await this.getBuyerInfo();
    }
    const { name, email, phone } = this.data.buyer.defaultAddress;
    this.setData({
      contact: {
        name,
        email,
        phone,
      },
    });
  },
  onHide() {
    this.setData({
      isHide: true,
    });
  },
  onShow() {
    this.setData({
      isHide: false,
    });
  },
  onShowPadding() {
    this.setData({
      paddingStatus: "active",
    });
  },
  onHidePadding() {
    this.setData({
      paddingStatus: "",
    });
  },
  onAreaSelect(e) {
    const { value } = e.target.dataset;
    this.setData({
      area: value,
    });
  },
  onNoteInput(e) {
    this.setData({
      note: e.detail.value,
    });
  },
  onContactInput(e) {
    const { type } = e.target.dataset;
    const { value } = e.detail;
    this.setData({
      contact: {
        ...this.data.contact,
        [type]: value,
      },
    });
  },
  onNumberPeopleChange(name, value) {
    this.setData({
      [name]: value,
    });
  },
  onSubmit() {
    const [isValid, errMsg] = validate(this.data.contact);
    this.setData({
      errMsg,
    });
    if (isValid) {
      const {
        info,
        area,
        note,
        contact,
        smsReminder,
        elderlyPeopleNumber,
        childrenNumber,
      } = this.data;
      const notes = {
        detail: note,
        seats: [
          {
            title: "Elderly people",
            value: elderlyPeopleNumber,
          },
          {
            title: "Children",
            value: childrenNumber,
          },
        ],
        sittingArea: area,
      };
      const id = "id_" + new Date().getTime();
      this.bookingTable({
        _id: id,
        notes,
        ...info,
        contact,
        smsReminder,
        status: "reserved",
      });
      redirectTo("reservation-detail", { id });
    }
  },
  onToggleSMSRemider() {
    this.setData({
      smsReminder: !this.data.smsReminder,
    });
  },
  onTimeOut() {
    this.setData({
      isShowModal: true,
    });
  },
  onNavBack() {
    my.navigateBack();
  },
});
