Page({
  onShowMultiLevelSelect() {
    if (my.canIUse('multiLevelSelect')) {
      my.multiLevelSelect({
        title: 'Title',
        optionsOne: [
          'Every Monday',
          'Every Tuesday',
          'Every Wednesday',
          'Every Thursday',
          'Every Friday',
          'Every Saturday',
          'Every Sunday',
        ],
        selectedOneIndex: 2,
        success: (res) => {},
      });
    }
  },
});
