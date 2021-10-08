Component({
  props: {
    props: {
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

    countTotalFilters() {
      const totalFilters = Object.entries(this.props.selectedFilters).reduce(
        (acc, [key, value]) => {
          if (
            !key ||
            !value ||
            (key === 'priceRange' && !value.start) ||
            (key === 'priceRange' && !value.end)
          )
            return acc;
          return acc + 1;
        },
        0
      );

      this.setData({
        totalFilters,
      });
    },
  },

  // Life cycle
  deriveDataFromProps() {
    this.countTotalFilters();
  },
});
