import { getData } from '../../services';

Page({
  data: {
    status: 'LOADING',
    headerType: 'DEFAULT',
    campaigns: [1, 2, 3, 4],
    banners: [1, 2, 3],
  },
  async loadData() {
    try {
      const [banners, campaigns] = await Promise.all([
        getData('banners'),
        getData('campaigns'),
      ]);

      this.setData({
        ...this.data,
        banners,
        campaigns,
        status: 'SUCCESS',
      });
    } catch (err) {
      this.setData({
        status: 'FAILURE',
      });
    }
  },
  async onLoad() {
    this.loadData();
  },
  onShow() {
    my.setCanPullDown({ canPullDown: false });
  },
  onPageScroll(e) {
    if (e.scrollTop === 0)
      this.setData({
        ...this.data,
        headerType: 'DEFAULT',
      });
    if (e.scrollTop >= 16)
      this.setData({
        ...this.data,
        headerType: 'SCROLLED',
      });
  },
});
