import query from "query-string";

import { getCities, getDistricts, getWards } from "../../services/address";

Page({
  data: {
    addresId: null,
    cities: [],
    districts: [],
    wards: [],
    city: null,
    district: null,
    ward: null,
  },
  onLoad(e) {
    const params = query.parse(e);
    const addresId = params && params.id;

    if (addresId) {
      this.setData({ addresId });
      my.setNavigationBar({
        title: "Thay đổi địa chỉ",
      });
    } else {
      my.setNavigationBar({
        title: "Thêm địa chỉ mới",
      });
    }

    this.getCities();
  },
  onSubmit(event) {
    console.log("submit :>> ", event);
  },
  onReset(event) {
    console.log("reset :>> ", event);
  },
  async getCities() {
    const cities = await getCities();
    this.setData({ cities });
  },
  async selectCity(city) {
    const districts = await getDistricts(city.id);
    this.setData({ city, district: null, ward: null, wards: [], districts });
  },
  async selectDistrict(district) {
    const wards = await getWards(this.data.city.id, district.id);
    console.log("wards :>> ", wards);
    this.setData({ ward: null, wards, district });
  },
  async selectWard(ward) {
    this.setData({ ward });
  },
});
