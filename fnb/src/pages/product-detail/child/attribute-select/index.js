Component({
  props: {
    status: "LOADING",
    attribute: {},
    selectedValues: [],
  },
  methods: {
    onSelectAttribute(aId, vId) {
      this.props.onSelectAttribute(aId, vId);
    },
  },
});
