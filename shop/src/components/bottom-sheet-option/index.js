import { isObjectEqual } from '../../utils/common';

Component({
  data: {
    selectedOption: {},
  },

  props: {
    className: '',
    isShowOption: false,
    type: 'size',
    sizeSelected: {},
    colorSelected: {},
    product: {
      id: '',
      name: '',
      images: [],
      price: '',
      list_price: '',
      discount_rate: 0,
      colors: [
        {
          id: 0,
          color: 'Light Blue',
          image: '',
        },
      ],
      sizes: [
        {
          id: 0,
          size: 'S',
        },
      ],
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
    _onSelectOption(id) {
      this.setData({
        selectedOption: id,
      });
    },
  },

  // Life cycle
  deriveDataFromProps(nextProps) {
    if (isObjectEqual(this.props, nextProps)) return;

    const { type, sizeSelected, colorSelected } = nextProps;

    this.setData({
      selectedOption: type === 'size' ? sizeSelected : colorSelected,
    });
  },
});
