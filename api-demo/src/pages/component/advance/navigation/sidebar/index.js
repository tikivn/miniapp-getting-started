Page({
  data: {
    active1: 0,
    active2: 0,
    active3: 0,
    active4: 0,
    active5: 0,
    activeChild5: null,
    items1: [
      { title: "Page 1", anchor: "1-1" },
      { title: "Page 2", anchor: "1-2" },
      { title: "Page 3", anchor: "1-3" },
    ],
    items2: [
      { title: "Page 1", icon: "home", anchor: "2-1" },
      { title: "Page 2", icon: "home", anchor: "2-2" },
      { title: "Page 3", icon: "home", anchor: "2-3" },
    ],
    items3: [
      { title: "", icon: "home", anchor: "3-1" },
      { title: "", icon: "home", anchor: "3-2" },
      { title: "", icon: "home", anchor: "3-3" },
    ],
    items5: [
      { title: "Page 1", anchor: "5-1" },
      {
        title: "Page 2",
        anchor: "5-2",
        expandChildren: false,
        children: [
          { title: "Page 2.1", anchor: "2-1-1" },
          { title: "Page 2.2", anchor: "2-2-2" },
        ],
      },
      { title: "Page 3", anchor: "5-3", showBadge: true },
      { title: "Page 4", anchor: "5-4", showBadge: true, badgeText: "MỚI" },
    ],
  },
  onItem1Click(index) {
    this.setData({ active1: index });
  },
  onItem2Click(index) {
    this.setData({ active2: index });
  },
  onItem3Click(index) {
    this.setData({ active3: index });
  },
  onItem4Click(index) {
    this.setData({ active4: index });
  },
  onItem5Click(index) {
    const activeItem = this.data.items5[index];
    if (activeItem.children && activeItem.children.length > 0) {
      this.setData({
        items5: this.data.items5.map((item, itemIndex) =>
          itemIndex === index
            ? { ...item, expandChildren: !activeItem.expandChildren }
            : item
        ),
      });
    } else {
      this.setData({
        active5: index,
      });
    }
  },
  onChild5Click(parentIndex, index) {
    this.setData({
      activeChild5: index,
      active5: parentIndex,
    });
  },
});
