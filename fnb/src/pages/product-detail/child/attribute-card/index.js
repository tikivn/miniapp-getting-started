Component({
  props: {
    value: {},
    attributeId: '',
    status: 'LOADING',
    isMultipleChoice: false,
  },
  onInit() {},
  didUpdate(prevProps, prevData) {},
  methods: {
    onSelect() {
      this.props.onSelectAttribute(
        this.props.attributeId,
        this.props.value._id,
      );
    },
  },
});
