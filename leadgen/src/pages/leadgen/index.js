import qs from 'query-string';

Page({
  onLoad(query) {
    const { id } = qs.parse(query);
    this.setData({ id });
  },
  onSubmitSuccess() {
    my.showToast({
      type: 'success',
      content: 'Hồ sơ mua được tạo thành công',
      duration: 3000,
    });
    my.navigateBack();
  },
});
