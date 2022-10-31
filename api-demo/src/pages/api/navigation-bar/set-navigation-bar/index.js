Page({
  data: {
    title: '',
    titleColor: '',
    borderBottomColor: '',
    image: '',
    showSearch: false,
    textSearch: 'Nhập từ khóa',
    borderRadius: 4,
    theme: 'reverse',
    items: [
      { name: 'default', value: 'Default' },
      { name: 'reverse', value: 'Reverse', checked: true },
    ]
  },
  onLoad() {
    my.addIconsToNavigationBar({
      icons: [
        {
          image: '/images/cart.png',
          badge: '10',
        },
      ],
      padding: 10,
    });
  },
  titleChange(e) {
    this.setData({
      title: e.detail.value,
    });
  },
  borderBottomColorChange(e) {
    this.setData({
      borderBottomColor: e.detail.value,
    });
  },
  titleBarColorChange(e) {
    this.setData({
      titleBarColor: e.detail.value,
    });
  },
  imageChange(e) {
    this.setData({
      image: e.detail.value,
    });
  },
  setNavigationBar() {
    const title = this.data.title;
    const borderBottomColor = this.data.borderBottomColor;
    const titleBarColor = this.data.titleBarColor;
    const image = this.data.image;
    my.setNavigationBar({
      title,
      borderBottomColor,
      titleBarColor,
      image,
      search: {
        show: this.data.showSearch,
        placeholder: this.data.textSearch,
        borderRadius: this.data.borderRadius,
      },
      theme: this.data.theme,
      fail: (error) => {
        my.alert({ content: error.errorMessage });
      },
    });
  },
  reset() {
    my.setNavigationBar({
      reset: true,
      fail: (error) => {
        my.alert({ content: error.errorMessage });
      },
    });
  },
  onChangeTheme(e) {
    this.setData({ theme: e.detail.value });
  },
  onChangeSearch() {
    this.setData({ showSearch: !this.data.showSearch });
  },
  onChangeText(e) {
    this.setData({ textSearch: e.detail.value });
  },
  onChangeRadius(e) {
    this.setData({ borderRadius: e.detail.value });
  },
  onSearchEvent(e) {
    my.alert({ content: 'Ok' });
  },
});
