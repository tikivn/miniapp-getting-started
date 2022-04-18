import { $page } from '@tiki.vn/redux-miniprogram-bindings';

import { addBuyerAddress } from '../../store/actions/buyer';
import { getUserToken, refreshUserToken } from '../../store/actions/auth';

import {
  validate,
  createDataToSubmit,
  createDataForAddressBook,
} from './helper';

$page({
  mapState: [
    (state) => ({
      token: state.auth.token,
    }),
  ],
  mapDispatch: {
    addBuyerAddress,
    getUserToken,
    refreshUserToken,
  },
})({
  data: {
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
      title: 'New address',
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
        phone: phone.trim().slice(0, 10),
        address: {
          street: street.slice(0, 50),
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
    const a = createDataToSubmit(this.data.addressInfo);
    this.addBuyerAddress(a);

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
  onToggleCheckBox() {
    this.setData({
      willSaveToAddressBook: !this.data.willSaveToAddressBook,
    });
  },
});
