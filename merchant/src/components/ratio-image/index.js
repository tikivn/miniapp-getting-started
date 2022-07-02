Component({
  props: {
    className: '',
    src: '',
    mode: '',
    ratio: '',
    style: null,
    cacheWidth: null,
    lazyLoad: false,
    onTap: () => {},
  },
  methods: {
    onTap() {
      this.props.onTap({
        target: {
          dataset: this.dataset,
        },
      });
    },

    updateDataSet() {
      this.dataset = {};
      for (const key in this.props) {
        if (/data-/gi.test(key)) {
          this.dataset[key.replace(/data-/gi, '')] = this.props[key];
        }
      }
    },
  },

  // Life cycle
  didMount() {
    this.updateDataSet();
  },

  didUpdate() {
    this.updateDataSet();
  },
});
