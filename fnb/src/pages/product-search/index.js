import { $page } from '@tiki.vn/redux-miniprogram-bindings';

import { constants as c } from '../../constants';
import { getAllProducts } from '../../store/actions/product';
import { debounce, navigateTo, queryToObj } from '../../helper';

import { search, getPoppularProduct } from './helper';

$page({
  mapState: [
    (state) => ({
      list: state.product.list,
      store: state.store.defaultStore,
    }),
  ],
  mapDispatch: { getAllProducts },
})({
  data: {
    searchValue: '',
    searchResult: [],
    status: c.LOADING,
  },
  async onLoad(query) {
    my.setNavigationBar({ title: 'Search' });
    const orderMethod = queryToObj(query).method;

    if (this.data.list.status === c.LOADING) {
      await this.getAllProducts();
    }

    this.setData({
      orderMethod,
      status: c.SUCCESS,
      searchResult: getPoppularProduct(this.data.list.data),
    });

    this.onSearch = debounce(this.onSearch, 500);
  },
  onShow() {
    my.setCanPullDown({ canPullDown: false });
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
      searchResult: getPoppularProduct(this.data.list.data),
    });
  },
  onSearch(value) {
    const searchResult = search(this.data.list.data, value);

    this.setData({
      searchResult,
    });
  },
  onProductClick(p) {
    const id = p._id;
    navigateTo('product-detail', { method: this.data.orderMethod, id });
  },
});
