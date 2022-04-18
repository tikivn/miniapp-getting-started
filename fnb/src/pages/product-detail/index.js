import { $page } from '@tiki.vn/redux-miniprogram-bindings';

import {
  getProductInfo,
  toggleFavoriteProduct,
} from '../../store/actions/product';
import { constants as c } from '../../constants';
import { addCart } from '../../store/actions/cart';
import { queryToObj } from '../../helper';
import myx from '../../helper/myx';
import {
  initData,
  createDataToAddCart,
  changeProductNumber,
  handleAttributeSelect,
} from './helper';

$page({
  mapState: [
    (state) => ({
      info: state.product.info,
    }),
  ],
  mapDispatch: { addCart, getProductInfo, toggleFavoriteProduct },
})({
  data: {
    total: 0,
    note: '',
    number: 1,
    prevTop: 0,
    screenHeight: 0,
    additionalFee: 0,
    paddingStatus: '',
    status: c.LOADING,
    selectedAttributes: [],
    isHideOrderMessage: false,
  },

  async onLoad(query) {
    const { method, id } = queryToObj(query);
    await this.getProductInfo(id);
    const systemInfo = await myx.getSystemInfo();
    this.setData({
      ...initData(this.data.info.data),
      status: c.SUCCESS,
      orderMethod: method,
      screenHeight: systemInfo.screenHeight,
    });
  },
  onShow() {
    my.hideBackHome({ hide: true });
  },
  onPageScroll(e) {
    const { scrollTop } = e;
    const { prevTop } = this.data;
    if (scrollTop > prevTop && scrollTop > 200 && prevTop < 200) {
      this.setData({
        prevTop: scrollTop,
      });
      my.hideBackHome({ hide: false });
    }
    if (scrollTop < prevTop && scrollTop < 200 && prevTop > 200) {
      this.setData({
        prevTop: scrollTop,
      });
      my.hideBackHome({ hide: true });
    }
  },
  onTextBlur() {
    this.setData({
      paddingStatus: '',
    });
  },
  onTextFocus() {
    this.setData({
      paddingStatus: 'active',
    });
  },
  onChangeNumber(v) {
    this.setData({ ...changeProductNumber(this.data, v) });
  },
  onSelectAttribute(aId, vId) {
    this.setData({ ...handleAttributeSelect(this.data, aId, vId) });
  },
  onNoteInput(e) {
    this.setData({ note: e.detail.value });
  },
  onAddCart() {
    this.addCart(createDataToAddCart(this.data));
  },
  onToggleFavorite() {
    this.setData({
      product: {
        ...this.data.product,
        isFavorite: !this.data.info.data.isFavorite,
      },
    });
    this.toggleFavoriteProduct(
      this.data.info.data._id,
      !this.data.info.data.isFavorite,
    );
  },
});
