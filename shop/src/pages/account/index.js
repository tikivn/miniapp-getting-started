import { getUserInfo, getNumOrders } from '../../services/index';
import { loadBadgeCart } from '../../utils/navigate';

Page({
  data: {
    isLoading: false,
    user: {},
    numOrders: {},
  },

  onCustomIconEvent(e) {
    my.navigateTo({ url: 'pages/cart/index' });
  },

  async loadData() {
    this.setData({
      isLoading: true,
    });

    try {
      const [user, numOrders] = await Promise.all([
        getUserInfo(),
        getNumOrders(),
      ]);

      this.setData({
        user,
        numOrders,
        isLoading: false,
      });
    } catch (error) {
      this.setData({
        isLoading: false,
      });
    }
  },

  // Life cycle
  onShow() {
    loadBadgeCart('/assets/images/ic-cart-account.png');
  },

  onReady() {
    this.loadData();
  },
});
