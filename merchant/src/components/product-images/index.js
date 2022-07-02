Component({
  props: {
    className: '',
    isLoading: true,
    images: [],
  },

  data: {
    current: 1,
  },

  // Life cycle
  methods: {
    handleOnChange(event) {
      this.setData({ current: event.detail.current + 1 });
    },
  },
});
