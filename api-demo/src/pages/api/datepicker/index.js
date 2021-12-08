Page({
  showDatePicker(format) {
    my.datePicker({
      format,
      success: (success) => {
        my.alert({
          content: JSON.stringify(success),
        });
      },
      fail: (error) => {
        my.alert({
          content: JSON.stringify(error),
        });
      },
    });
  },
  onShowDate() {
    this.showDatePicker('dd-MM-yyyy');
  },
  onShowTime() {
    this.showDatePicker('HH:mm');
  },
  onShowDateTime() {
    this.showDatePicker('dd-MM-yyyy HH:mm');
  },
});
