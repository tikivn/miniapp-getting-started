Page({
  openOne() {
    if (my.canIUse('optionsSelect')) {
      my.optionsSelect({
        title: 'Repayment Date Selection',
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
        positiveString: 'Xác nhận',
        negativeString: 'Hủy',
        success: (res) => {
          my.alert({
            title: JSON.stringify(res),
          });
        },
        fail: () => {
          console.log('Fail');
        },
      });
    }
  },

  openTwo() {
    if (my.canIUse('optionsSelect')) {
      my.optionsSelect({
        title: 'Repayment Date Selection',
        optionsOne: [
          'Every Monday',
          'Every Tuesday',
          'Every Wednesday',
          'Every Thursday',
          'Every Friday',
          'Every Saturday',
          'Every Sunday',
        ],
        optionsTwo: ['Every Week', 'Every Month', 'Every Quarter', 'Every Year'],
        selectedOneIndex: 2,
        selectedTwoIndex: 1,
        positiveString: 'Xác nhận',
        negativeString: 'Hủy',
        success: (res) => {
          my.alert({
            title: JSON.stringify(res),
          });
        },
        fail: () => {
          console.log('Fail');
        },
      });
    }
  },
});
