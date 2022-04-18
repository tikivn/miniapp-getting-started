/* eslint-disable no-undefined */
Component({
  props: {
    type: '',
    size: 14,
    color: 'black',
  },
  data: {
    isCustomIcon: false,
    customIcon: {
      none: '',
      warning_fill: '/assets/warning_icon.png',
      tick_fill: '/assets/tick_icon.png',
    },
    colors: {
      white: '#FFFFFF',
      gray10: '#F5F5FA',
      gray20: '#EBEBF0',
      gray30: '#DDDDE3',
      gray40: '#C4C4CF',
      gray50: '#A6A6B0',
      gray60: '#808089',
      gray100: '#27272A',
      black: '#000000',
      brand: '#1A94FF',
      red: '#FF424F',
    },
  },
  onInit() {
    this.setData({
      isCustomIcon: this.data.customIcon[this.props.type] !== undefined,
    });
  },
  didUpdate() {
    this.setData({
      isCustomIcon: this.data.customIcon[this.props.type] !== undefined,
    });
  },
});
