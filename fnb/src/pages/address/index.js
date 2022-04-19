import { $page } from '@tiki.vn/redux-miniprogram-bindings';

import { navigateTo } from '../../helper';
import { constants as c } from '../../constants';
import { getUserToken } from '../../store/actions/auth';
import { changeDefaultAddress, getBuyerInfo } from '../../store/actions/buyer';

import { getSelectedAddress } from './helper';

$page({
  mapState: ['buyer'],
  mapDispatch: { getBuyerInfo, changeDefaultAddress, getUserToken },
})({
  data: {
    status: c.LOADING,
  },
  async onLoad(query) {
    my.setNavigationBar({ title: 'Deliver to' });
    if (this.data.buyer.status === c.LOADING) {
      await this.getBuyerInfo();
    }
    this.setData({
      status: c.SUCCESS,
    });
  },
  onNewPlaceSelect() {
    navigateTo('new-address');
  },
  onSelectAddress(e) {
    this.changeDefaultAddress(e.target.dataset.id);
    my.navigateBack();
  },
  onEditAddress({ id }) {
    navigateTo('edit-address', { id });
  },
  async onOpenAddressBook() {
    if (!this.data.token) await this.getUserToken();
    my.getAddress({
      success: (res) => {
        const data = getSelectedAddress(res);
        this.changeDefaultAddress('', data);
        my.navigateBack();
      },
      fail: ({ errorMessage: err }) => {},
    });
  },
});
