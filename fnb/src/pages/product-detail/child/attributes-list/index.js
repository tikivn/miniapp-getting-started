Component({
  props: {},
  onInit() {},
  methods: {
    onSelectAttribute(aId, vId) {
      this.props.onSelectAttribute(aId, vId);
    },
  },
});
