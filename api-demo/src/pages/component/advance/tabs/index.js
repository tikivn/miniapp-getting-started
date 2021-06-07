Page({
  data: {
    activeTab1: 0,
    activeTab2: 0,
    tabs1: [
      { title: "Tab" },
      { title: "Tab" },
      { title: "Tab" },
      { title: "Tab" },
    ],
    tabs2: [
      { title: "Tab", icon: "home" },
      { title: "Tab", icon: "home" },
      { title: "Tab", icon: "home" },
      { title: "Tab", icon: "home" },
    ],
  },
  onTabClick({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
  },
  onChange({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
  },
});
