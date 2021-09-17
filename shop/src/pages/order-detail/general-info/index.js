Component({
  data: {
    rows: [
      {
        key: 'id',
        value: 'Order id',
      },
      {
        key: 'date',
        value: 'Order date',
      },
      {
        key: 'status',
        value: 'Status',
      },
    ],
  },
  props: {
    order: {
      id: '',
      date: '',
      status: '',
    },
  },
});
