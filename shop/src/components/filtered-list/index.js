import { isObjectEqual } from '../../utils/common';

Component({
  props: {
    className: '',
    selectedFilters: {
      priceOption: null,
      priceRange: {
        start: null,
        end: null,
      },
      size: null,
      type: null,
      color: null,
    },

    onRemoveFilter: () => {},
  },

  data: {
    formattedSelectedFilters: [],
  },

  methods: {
    _onRemoveFilter(event) {
      const { item } = event.target.dataset;
      this.props.onRemoveFilter(item);
    },

    formatFilteredItems(selectedFilters) {
      const formattedSelectedFilters = Object.entries(selectedFilters).reduce(
        (acc, [key, value]) => {
          if (!key || !value) return acc;

          const formattedKey = ((key) => {
            switch (key) {
              case 'priceRange':
              case 'priceOption':
                return 'Price';

              case 'size':
                return 'Size';

              case 'type':
                return 'Product type';

              case 'color':
                return 'Color';
            }
          })(key);

          const formattedValue = ((key, value) => {
            switch (key) {
              case 'priceRange':
                if (value.start && value.end)
                  return `${value.start.display || 0} ₫ - ${
                    value.end.display || 0
                  } ₫`;
                return '';

              default:
                return value.label;
            }
          })(key, value);

          if (formattedKey && formattedValue)
            return [
              ...acc,
              { key, value: `${formattedKey}: ${formattedValue}` },
            ];

          return acc;
        },
        []
      );

      this.setData({
        formattedSelectedFilters,
      });
    },
  },

  // Life cycle
  deriveDataFromProps(nextProps) {
    if (isObjectEqual(this.props, nextProps)) return;

    this.formatFilteredItems(nextProps.selectedFilters);
  },
});
