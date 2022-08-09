import qs from 'query-string';

Page({
  onLoad(query) {
    const { id } = qs.parse(query);
    this.setData({ id });
  },
});
