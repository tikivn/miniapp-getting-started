Component({
  props: {
    items: [],
  },
  data: {
    current: 1,
  },
  onInit() {},
  methods: {
    onChange(e) {
      const { current } = e.detail;
      this.setData({ current: current + 1 });
    },
  },
});
