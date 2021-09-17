Component({
  data: {
    rows: [
      {
        key: 'madeIn',
        value: 'Made In',
      },
      {
        key: 'size',
        value: 'Size',
      },
      {
        key: 'color',
        value: 'Color',
      },
      {
        key: 'material',
        value: 'Material',
      },
    ],
  },
  props: {
    viewMore: false,
    isLoading: true,
    detail: {
      madeIn: '',
      size: '',
      color: '',
      material: '',
      image: '',
      shortDescription: '',
      longDescription: '',
    },
  },
  methods: {
    _onSwitchView() {
      this.setData({
        viewMore: !this.data.viewMore,
      });
    },
  },
});
