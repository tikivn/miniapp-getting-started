import { $page } from '@tiki.vn/redux-miniprogram-bindings';

import { queryToObj } from '../../helper';
import {
  updateBuyerAddress,
  deleteBuyerAddress,
} from '../../store/actions/buyer';
import { getUserToken, refreshUserToken } from '../../store/actions/auth';

import {
  validate,
  createDataToSubmit,
  getSelectedAddress,
  createDataForAddressBook,
} from './helper';

$page({
  mapState: [
    (state) => ({
      addressList: state.buyer.addressList,
      token: state.auth.token,
    }),
  ],
  mapDispatch: {
    updateBuyerAddress,
    deleteBuyerAddress,
    getUserToken,
    refreshUserToken,
  },
})({
  data: {
    _id: '',
    paddingStatus: '',
    isShowModal: false,
    willSaveToAddressBook: false,
    addressInfo: {
      name: '',
      phone: '',
      address: {
        street: '',
        city: null,
        district: null,
        ward: null,
      },
    },
    errMsg: {
      name: '',
      city: '',
      ward: '',
      phone: '',
      street: '',
      district: '',
    },
  },
  onLoad(query) {
    my.setNavigationBar({
      title: 'Edit address',
    });
    my.addIconsToNavigationBar({
      icons: [
        {
          image: '/assets/delete.png',
          width: 24,
          height: 24,
        },
      ],
      padding: 10,
    });
    const id = queryToObj(query).id;
    const addressInfo = getSelectedAddress(this.data.addressList, id);
    this.setData({
      addressInfo,
      _id: id,
    });
  },
  onActivePadding() {
    this.setData({
      paddingStatus: 'active',
    });
  },
  onHidePadding() {
    this.setData({
      paddingStatus: '',
    });
  },
  onAddressChange(e) {
    const {
      street,
      city,
      district,
      ward,
      full_name: name,
      phone_number: phone,
    } = e;
    this.setData({
      addressInfo: {
        name,
        phone: phone.trim(),
        address: {
          street,
          city,
          ward,
          district,
        },
      },
    });
  },
  async onSave() {
    const [isValid, msg] = validate(this.data.addressInfo);
    this.setData({
      errMsg: msg,
    });
    if (!isValid) return;
    const a = {
      ...createDataToSubmit(this.data.addressInfo),
      _id: this.data._id,
    };
    this.updateBuyerAddress(a);

    if (this.data.willSaveToAddressBook) {
      if (!this.data.token) await this.getUserToken();
      else await this.refreshUserToken();
      my.saveAddress({
        data: createDataForAddressBook(this.data.addressInfo),
        success: (success) => {},
        fail: ({ errorMessage: err }) => {
          const content = 'Message: ' + err;
          my.alert({
            title: 'Fail to save to address book.',
            content,
            buttonText: 'OK',
          });
        },
      });
    }

    my.navigateBack();
  },
  onCustomIconEvent(e) {
    this.setData({
      isShowModal: true,
    });
  },
  onCloseModal() {
    this.setData({
      isShowModal: false,
    });
  },
  onConfirmDelete() {
    this.deleteBuyerAddress(this.data._id);
    my.navigateBack();
  },
  onToggleCheckBox() {
    this.setData({
      willSaveToAddressBook: !this.data.willSaveToAddressBook,
    });
  },
});
