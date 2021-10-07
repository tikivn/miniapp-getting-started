import { getNewProductsAPI } from '../../services/index';

Page({
  data: {
    isLoading: true,
    newProducts: [],
    isShowFilter: false,
  },

  onTapProduct() {
    my.navigateTo({ url: 'pages/detail/index' });
  },

  showFilter() {
    this.setData({
      isShowFilter: true,
    });
  },

  hideFilter() {
    this.setData({
      isShowFilter: false,
    });
  },

  async loadData() {
    this.setData({
      isLoading: true,
    });

    try {
      const newProducts = await getNewProductsAPI();

      this.setData({
        newProducts,
        isLoading: false,
      });
    } catch {
      this.setData({
        isLoading: false,
      });
    }
  },

  // Life cycle
  onReady() {
    this.loadData();
  },
});
