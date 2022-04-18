Component({
  props: {
    info: {},
    onToggleFavorite() {},
  },
  onInit() {},
  methods: {
    onToggleFavorite() {
      this.props.onToggleFavorite();
    },
  },
});
