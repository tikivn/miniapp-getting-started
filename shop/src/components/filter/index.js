Component({
  props: {
    isShow: false,
    onClose: () => {},
    onSelect: () => {},
  },

  data: {
    prices: [
      {
        value: '1',
        label: 'Below 100.000 ₫',
      },
      {
        value: '2',
        label: '100.000 ₫ - 200.000 ₫',
      },
      {
        value: '3',
        label: '200.000 ₫ - 750.000 ₫',
      },
      {
        value: '4',
        label: 'Above 750.000 ₫',
      },
    ],

    sizes: [
      {
        value: 'xs',
        label: 'XS',
      },
      {
        value: 's',
        label: 'S',
      },
      {
        value: 'm',
        label: 'M',
      },
      {
        value: 'l',
        label: 'L',
      },
      {
        value: 'xl',
        label: 'XL',
      },
      {
        value: 'xxl',
        label: 'XXL',
      },
    ],

    types: [
      {
        value: 'new',
        label: 'New arrival',
      },
      {
        value: 'sale',
        label: 'Sale',
      },
    ],

    colors: [
      {
        value: 'white',
        label: '#FFFFFF',
      },
      {
        value: 'blue',
        label: '#BFDFF6',
      },
      {
        value: 'yellow',
        label: '#FFF0DA',
      },
      {
        value: 'brown',
        label: '#B77052',
      },
      {
        value: 'black',
        label: '#53546B',
      },
    ],
  },

  methods: {
    _onClose() {
      this.props.onClose();
    },

    _onSelect(event) {},
  },
});
