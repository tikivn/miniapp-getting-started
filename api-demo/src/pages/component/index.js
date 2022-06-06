import { advancedComponents, basicComponents } from '../../configs/components';
import { parse } from 'query-string';

Page({
  data: {
    tabs: [{ title: 'Basic components' }, { title: 'Advanced components' }],
    activeTab: 0,
    basicComponents,
    advancedComponents,
  },
  onLoad(params) {
    const query = parse(params || '');
    my.setTabBarBadge({
      index: 0,
      text: 10,
      style:{
        backgroundColor:"red"
      }
    });
    if (query && query.page) {
      my.navigateTo({ url: query.page });
    }
  },
  // onShow() {
  //   my.reLaunch({
  //     url: 'pages/api/index',
  //     success: (res) => {
  //       my.alert({ content: 'Font is load successful' });
  //     },
  //     fail: (res) => {
  //       my.alert({ title: JSON.stringify(res) });
  //     },
  //   });
  // },
  onTabClick({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
  },
  onTabChange({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
  },
});
