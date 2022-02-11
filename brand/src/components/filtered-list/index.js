import { isObjectEqual } from '../../utils/common';

Component({
  props: {
    className: '',
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

          if (key === 'service') {
            const checkedServices = value
              .filter((item) => item.checked)
              .map((item) => ({
                key: item.query_name,
                value: item.display_value,
              }));
            if (checkedServices.length) {
              return [...acc, ...checkedServices];
            }
          }

          const formattedValue = ((key, value) => {
            switch (key) {
              case 'priceRange':
                if (value.start && value.end)
                  return `Từ ${value.start.display || 0} đến ${
                    value.end.display || 0
                  }`;
                return '';

              default:
                return value.display_value;
            }
          })(key, value);

          if (formattedValue) return [...acc, { key, value: formattedValue }];

          return acc;
        },
        [],
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
