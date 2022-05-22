Page({
  data: {
    activeIndex: 1,
    failIndex: 1,
    size: 0,
    items: [
      {
        label: 'Start',
        sub: 'Description',
      },
      {
        label: 'Middle',
        sub: 'Description',
      },
      {
        label: 'End',
        sub: 'Description',
      },
    ],
    items2: [
      {
        label: 'Latest action',
        sub: 'Description',
      },
      {
        label: '2nd action',
        sub: 'Description',
      },
      {
        label: '1st action',
        sub: 'Description',
      },
    ],

    showNumberSteps: true,
  },
  onTapStep(e) {
    my.alert({ content: 'you tapped step ' + e.target.dataset.step });
  },
});
