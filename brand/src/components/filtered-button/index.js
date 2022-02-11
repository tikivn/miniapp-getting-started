import { isObjectEqual } from '../../utils/common';

Component({
  props: {
    props: {
      selectedFilters: {
        service: null,
        category: null,
        stock_location: null,
        price: null,
        priceRange: {
          start: null,
          end: null,
        },
      },

      onClick: () => {},
    },
  },

  data: {
    totalFilters: 0,
  },

  methods: {
    _onClick() {
      this.props.onClick();
    },

    countTotalFilters(selectedFilters) {
      const totalFilters = Object.entries(selectedFilters).reduce(
        (acc, [key, value]) => {
          if (
            !key ||
            !value ||
            (key === 'priceRange' && !value.start) ||
            (key === 'priceRange' && !value.end)
          )
            return acc;
          if (key === 'service') {
            const totalChecked = value.filter((item) => item.checked).length;
            return acc + totalChecked;
          }
          return acc + 1;
        },
        0,
      );

      this.setData({
        totalFilters,
      });
    },
  },

  // Life cycle
  deriveDataFromProps(nextProps) {
    if (isObjectEqual(this.props, nextProps)) return;
    this.countTotalFilters(nextProps.selectedFilters);
  },
});
