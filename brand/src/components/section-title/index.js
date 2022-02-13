Component({
  props: {
    title: '',
    action: '',
    sort: '',
    onTapActionButton: () => {},
  },

  methods: {
    _onTapActionButton() {
      this.props.onTapActionButton({
        title: this.props.title,
        sort: this.props.sort,
      });
    },
  },
});
