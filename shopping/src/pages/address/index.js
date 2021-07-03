import query from "query-string";

import { getCities, getDistricts, getWards } from "../../services/address";
import * as validate from "../../utils/validate";
import {
  setAddress,
  getRecentAddress,
  setRecentAddress,
  getAddress,
} from "../../utils/storage";

const validateFn = {
  name: validate.validateName,
  email: validate.validateEmail,
  phone: validate.validatePhone,
  address: validate.validateAddress,
};
const initFormValue = () => ({
  id: +new Date(),
  name: "Hung 1",
  phone: "0987654321",
  address: "Dia chi 1",
  city: "",
  district: "",
  ward: "",
});

Page({
  data: {
    addressId: null,
    cities: [],
    districts: [],
    wards: [],
    formValid: false,
    errors: {
      name: null,
      phone: null,
      addres: null,
    },
    formValue: initFormValue(),
  },
  async onLoad(e) {
    const params = query.parse(e);
    const addresId = params && params.id;
    let formValue = null;

    if (addresId) {
      const address = await getAddress();
      formValue = address.find((i) => i.id === addresId);
    }
    if (formValue) {
      this.setData({ addressId, formValue });
      my.setNavigationBar({
        title: "Thay đổi địa chỉ",
      });
      await Promise.all([
        this.getCities(),
        this.getDistricts(formValue.city.id),
        this.getWards(formValue.city.id, formValue.district.id),
      ]);
    } else {
      my.setNavigationBar({
        title: "Thêm địa chỉ mới",
      });
      await this.getCities();
    }

    this.checkFormValid = this.checkFormValid.bind(this);
  },
  async onSubmit() {
    const { formValue } = this.data;
    const recentAddress = await getRecentAddress();
    if (!recentAddress || recentAddress.id === formValue.id) {
      await Promise.all([setAddress(formValue), setRecentAddress(formValue)]);
    } else {
      await setAddress(formValue);
    }
  },
  checkFormValid() {
    const { formValue, errors } = this.data;
    const hasValue = Object.values(formValue).every(validate.hasValue);
    const hasError = Object.values(errors).some(validate.hasValue);
    console.log("formValue :>> ", formValue);
    console.log("hasError :>> ", hasError);
    console.log("hasValue :>> ", hasValue);
    this.setData({ formValid: hasValue && !hasError });
  },
  onInput(event) {
    const fieldName = event.target.dataset.name;
    const value = event.detail.value;
    const errorMsg = validateFn[fieldName](value);
    this.setData(
      {
        errors: { ...this.data.errors, [fieldName]: errorMsg },
        formValue: { ...this.data.formValue, [fieldName]: value },
      },
      this.checkFormValid
    );
  },
  async getCities() {
    const cities = await getCities();
    this.setData({ cities });
  },
  async getDistricts(cityId) {
    const districts = await getDistricts(cityId);
    this.setData({ districts });
  },
  async getWards(cityId, districtId) {
    const wards = await getWards(cityId, districtId);
    this.setData({ wards });
  },
  async selectCity(city) {
    const formValue = {
      ...this.data.formValue,
      city,
      district: null,
      ward: null,
    };
    this.setData({ formValue, wards: [] }, this.setFormValid);
    this.getDistricts(city.id);
  },
  async selectDistrict(district) {
    const formValue = {
      ...this.data.formValue,
      district,
      ward: null,
    };
    this.setData({ formValue }, this.checkFormValid);
    this.getWards(this.data.formValue.city.id, district.id);
  },
  async selectWard(ward) {
    const formValue = {
      ...this.data.formValue,
      ward,
    };
    this.setData({ formValue }, this.checkFormValid);
  },
});
