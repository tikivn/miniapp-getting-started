Component({
  props: {
    title: '',
    titleColor: 'white',
    bgColor: 'white',
    isUseHolder: true,
    btnColor: 'gray100',
  },
  methods: {
    _onSelect() {
      my.navigateBack();
    },
  },
});
