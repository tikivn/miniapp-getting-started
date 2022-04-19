import { $page } from '@tiki.vn/redux-miniprogram-bindings';

import { getStoreById, toggleFavoriteStore } from '../../store/actions/store';
import { queryToObj } from '../../helper';

$page({
  mapState: [
    (state) => ({
      info: state.store.info,
    }),
  ],
  mapDispatch: { getStoreById, toggleFavoriteStore },
})({
  data: {
    status: 'LOADING',
  },
  async onLoad(query) {
    const id = queryToObj(query).id;
    await this.getStoreById(id);
    this.setData({ status: 'SUCCESS', id });
  },
  onShow() {
    my.hideBackHome({ hide: true });
  },
  onToggleFavorite() {
    this.toggleFavoriteStore(this.data.id, !this.data.info.data.favorite);
  },
  onPhoneCall() {
    my.makePhoneCall({
      number: this.data.info.data.phone,
      success: (res) => {},
      fail: (e) => {},
    });
  },
});
