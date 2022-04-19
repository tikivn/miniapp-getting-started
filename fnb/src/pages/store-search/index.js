import { $page } from '@tiki.vn/redux-miniprogram-bindings';

import { constants as c } from '../../constants';
import { navigateTo, queryToObj, debounce } from '../../helper';
import { getAllStore, changeDefaultStore } from '../../store/actions/store';

import { search } from './helper';

$page({
  mapState: [
    (state) => ({
      list: state.store.list,
    }),
  ],
  mapDispatch: { getAllStore, changeDefaultStore },
})({
  data: {
    searchResult: [],
    searchValue: '',
  },
  async onLoad(query) {
    my.setNavigationBar({ title: 'Search store' });
    this.onSearch = debounce(this.onSearch, 500);
    const next = queryToObj(query).next;

    if (this.data.list.status === c.LOADING) {
      await this.getAllStore();
    }

    this.setData({
      next,
      status: c.SUCCESS,
      searchResult: this.data.list.data,
    });
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
      searchValue: '',
    });
    this.setData({
      searchResult: this.data.list.data,
    });
  },
  onSearch(value) {
    const searchResult = search(this.data.list.data, value);
    this.setData({
      searchResult,
    });
  },
  onStoreSelect(e) {
    const id = e.target.dataset.id;
    this.changeDefaultStore(id);
    if (this.data.next === 'info') {
      navigateTo('store-detail', { id });
    }
    if (['delivery', 'reservation'].includes(this.data.next)) {
      my.navigateBack({ delta: 1 });
    }
  },
});
