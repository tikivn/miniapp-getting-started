Component({
  data: {
    selectedOption: {}
  },

  props: {
    className: '',
    isShowOption: false,
    type: "size",
    product: {
      id: '',
      name: '',
      image: '',
      price: '',
      listPrice: '',
      discountRate: 0,
      colors: [
        {
          id: 0,
          color: 'Light Blue',
          image: ''
        }
      ],
      sizes: [
        {
          id: 0,
          size: 'S',
        }
      ]
    },
    onClose: () => {},
    onClick: () => {},
  },

  methods: {
     _onClose() {
      this.props.onClose();
    },
    _onClick() {
      const { selectedOption } = this.data;

      this.props.onClick(selectedOption);
    },
    _onSelectOption(id){
      this.setData({
        selectedOption: id
      })
    }
  },

  // Life cycle
  didMount() {
  },
});
