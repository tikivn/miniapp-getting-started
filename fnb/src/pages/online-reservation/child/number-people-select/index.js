Component({
  data: {
    onClose() {},
    onNumberPeopleSelect() {},
    current: { _id: 1, label: '1 people', value: 1, available: true },
    options: Array(30)
      .fill(0)
      .map((v, index) => {
        return {
          _id: index + 1,
          label: `${index + 1} people`,
          available: true,
        };
      }),
  },
  onInit() {
  },
  methods: {
    onSelect(e) {
      if (!e.target.dataset.value.available) return;
      this.setData({
        current: e.target.dataset.value,
      });
    },
    onClose() {
      this.props.onClose();
    },
    onConfirm() {
      this.props.onNumberPeopleSelect(this.data.current._id);
    },
  },
});
