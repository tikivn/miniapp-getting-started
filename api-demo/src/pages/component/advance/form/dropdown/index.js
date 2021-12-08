Page({
  data: {
    items1: ['Item 1', 'Item 2', 'Item 3'],
    items2: [
      { key: 1, name: 'Item 1' },
      { key: 2, name: 'Item 2' },
    ],
    item1: 'Item 1',
    item2: null,
  },
  onSelect1(item1) {
    this.setData({ item1 });
  },
  onSelect2(item2) {
    this.setData({ item2 });
  },
});
