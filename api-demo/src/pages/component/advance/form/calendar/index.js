Page({
  data: {
    tagData: [
      {
        date: '09-11-2021',
        tag: 'Aa',
      },
      {
        date: '10-11-2021',
        tag: 'Aa',
      },
      {
        date: '11-11-2021',
        tag: 'Aa',
      },
      {
        date: '12-11-2021',
        tag: 'Aa',
        tagColor: 'blue',
        tagInactiveColor: 'red',
      },
      {
        date: '13-11-2021',
        tag: 'Aa',
        disabled: true,
      },
      {
        date: '28-11-2021',
        tag: 'Aa',
        tagColor: 'blue',
        tagInactiveColor: 'red',
      },
    ],
  },
  onSelect(data) {
    console.log(data);
  },
  onChange(data) {
    console.log(data);
  },
});
