Component({
  props: {
    top: 0, // height of the obj before it in the page
    type: 'order',
    showButton: true,
    onSelect() {},
  },
  data: {
    image: {
      order: '/assets/no_order.png',
      search: '/assets/no_result.png',
    },
    title: {
      order: 'You have no order',
      search: 'Sorry, we nearly found it!',
    },
    subTitle: {
      order: 'How about trying our new drinks?',
      search: 'Please try again, better luck next time',
    },
    btnContent: {
      order: 'Order now!',
    },
  },
  methods: {
    onSelect() {
      this.props.onSelect();
    },
  },
});
