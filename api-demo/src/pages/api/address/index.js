Page({
  data: {
    address: {},
  },
  id: null,
  showAddress() {
    my.getAddress({
      success: (success) => {
        this.setData({ address: success });
        this.id = success.id;
      },
      fail: (fail) => {
        console.log('fail :>> ', fail);
      },
    });
  },
  onChangeAddress(address) {
    this.setData({ address });
  },
  getAddress() {
    const { address } = this.data;
    return {
      full_name: address.full_name,
      company: address.company,
      phone_number: address.phone_number,
      street: address.street,
      is_default: false,
      delivery_address_type: address.delivery_address_type || 'home',
      city_id: address.city.id || address.city,
      district_id: address.district.id || address.district,
      ward_id: address.ward.id || address.ward,
    };
  },
  showToastSuccess(content) {
    my.showToast({
      type: 'success',
      content,
      buttonText: 'OK',
      duration: 3000,
    });
  },
  showToastFail(content) {
    my.showToast({
      type: 'fail',
      content,
      buttonText: 'OK',
      duration: 3000,
    });
  },
  create() {
    my.saveAddress({
      data: this.getAddress(),
      success: (success) => {
        this.showToastSuccess('Create success');
        console.log('success :', success);
      },
      fail: (fail) => {
        this.showToastFail(JSON.stringify(fail));
        console.log('fail :', fail);
      },
    });
  },
  update() {
    my.saveAddress({
      data: { ...this.getAddress(), id: this.id },
      success: (success) => {
        this.showToastSuccess('Update success');
        console.log('success :', success);
      },
      fail: (fail) => {
        this.showToastFail(JSON.stringify(fail));
        console.log('fail :', fail);
      },
    });
  },
});
