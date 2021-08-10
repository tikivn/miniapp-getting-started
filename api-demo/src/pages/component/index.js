import { advancedComponents, basicComponents } from '../../configs/components';

Page({
  data: {
    tabs: [{ title: 'Basic components' }, { title: 'Advanced components' }],
    activeTab: 0,
    basicComponents,
    advancedComponents,
  },
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
