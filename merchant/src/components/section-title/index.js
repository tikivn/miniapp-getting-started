Component({
  props: {
    title: '',
    action: 'Xem thêm',
    value: '',
    onTapActionButton: () => {},
  },

  methods: {
    _onTapActionButton() {
      this.props.onTapActionButton({
        title: this.props.title,
        value: this.props.value,
      });
    },
  },
});
