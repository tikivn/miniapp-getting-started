import {
  isObjectEqual,
  moneyFormatter,
  parseNumberFromMoney,
} from '../../utils/common';

Component({
  props: {
    isShow: false,
    filters: {
      prices: [],
      sizes: [],
      types: [],
      colors: [],
    },
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
    onShow: () => {},
    onClose: () => {},
    onSelect: () => {},
  },

  data: {
    _selectedFilters: {
      priceOption: null,
      priceRange: {
        start: null,
        end: null,
      },
      size: null,
      type: null,
      color: null,
    },
  },

  methods: {
    _onShow() {
      this.props.onShow();
    },

    _onClose() {
      this.props.onClose();
    },

    _onSelect() {
      this._onClose();
      this.props.onSelect(this.data._selectedFilters);
    },

    onReset() {
      this.setData({
        _selectedFilters: {
          priceOption: null,
          priceRange: {
            start: null,
            end: null,
          },
          size: null,
          type: null,
          color: null,
        },
      });
    },

    onSelectPrice(event) {
      const { item } = event.target.dataset;
      const data = { ...this.data };
      data._selectedFilters.priceRange.start = null;
      data._selectedFilters.priceRange.end = null;
      data._selectedFilters.priceOption = item;
      this.setData(data);
    },

    onSelectSize(event) {
      const { item } = event.target.dataset;
      const data = { ...this.data };
      data._selectedFilters.size = item;
      this.setData(data);
    },

    onSelectType(event) {
      const { item } = event.target.dataset;
      const data = { ...this.data };
      data._selectedFilters.type = item;
      this.setData(data);
    },

    onSelectColor(event) {
      const { item } = event.target.dataset;
      const data = { ...this.data };
      data._selectedFilters.color = item;
      this.setData(data);
    },

    onInputStartPrice(event) {
      const data = { ...this.data };
      const number = parseNumberFromMoney(event.detail.value);
      data._selectedFilters.priceOption = null;
      if (!data._selectedFilters.priceRange)
        data._selectedFilters.priceRange = {};
      data._selectedFilters.priceRange.start = {
        value: number,
        display: moneyFormatter(number, ''),
      };
      this.setData(data);
    },

    onInputEndPrice(event) {
      const data = { ...this.data };
      const number = parseNumberFromMoney(event.detail.value);
      data._selectedFilters.priceOption = null;
      if (!data._selectedFilters.priceRange)
        data._selectedFilters.priceRange = {};
      data._selectedFilters.priceRange.end = {
        value: number,
        display: moneyFormatter(number, ''),
      };
      this.setData(data);
    },
  },

  // Life cycle
  deriveDataFromProps(nextProps) {
    if (isObjectEqual(this.props, nextProps)) return;

    this.setData({
      _selectedFilters: nextProps.selectedFilters,
    });
  },
});
