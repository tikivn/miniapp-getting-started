Component({
  data: {
    current: 0,
  },
  props: {
    className: '',
    tips: [
      {
        title: 'Title',
        description: 'Description',
        image: '/assets/images/onboard.png',
      },
      {
        title: 'Title',
        description: 'Description',
        image: '/assets/images/onboard-2.png',
      },
      {
        title: 'Title',
        description: 'Description',
        image: '/assets/images/onboard.png',
      },
      {
        title: 'Title',
        description: 'Description',
        image: '/assets/images/onboard-2.png',
      },
    ],
    onDone: () => {},
  },
  methods: {
    _onSkip() {
      this.setData({
        current: this.props.tips.length - 1,
      });
    },
    _onDone() {
      this.props.onDone();
    },
    _onNext() {
      let indexNext = this.data.current + 1;
      if (indexNext === this.props.tips.length) {
        indexNext = 0;
      }
      this.setData({
        current: indexNext,
      });
    },
    _onChange(event) {
      const { current } = event.detail;
      this.setData({
        current,
      });
    },
  },
});
