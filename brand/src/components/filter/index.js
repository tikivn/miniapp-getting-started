import {
  moneyFormatter,
  parseNumberFromMoney,
  copy,
  delay,
  isObjectEqual,
} from '../../utils/common';

Component({
  props: {
    filters: {
      service: [],
      category: [],
      stock_location: [],
      price: [],
    },
    hideCategorySection: false,
    onShow: () => {},
    onClose: () => {},
    onSelect: () => {},
  },

  data: {
    isShow: false,
    disabled: true,
    _selectedFilters: {
      service: null,
      category: null,
      stock_location: null,
      price: null,
      priceRange: {
        start: null,
        end: null,
      },
    },
    error: '',
  },

  methods: {
    async showBottomSheet() {
      my.hideTabBar();

      this.setData({
        _selectedFilters: this.props.selectedFilters,
      });

      this.setData({
        isShow: true,
      });

      await delay(200);

      this.setData({
        disabled: false,
      });
    },

    hideBottomSheet() {
      my.showTabBar();

      this.setData({
        isShow: false,
        disabled: true,
      });
    },

    _onSelect() {
      if (this.validatePrices()) {
        this.hideBottomSheet();
        this.props.onSelect(this.data._selectedFilters);
      }
    },

    onReset() {
      this.setData({
        _selectedFilters: {
          service: null,
          category: null,
          stock_location: null,
          price: null,
          priceRange: {
            start: null,
            end: null,
          },
        },
        error: '',
      });
    },

    onCheckboxChange(event) {
      const data = { ...this.data };
      const { value } = event.detail;
      const { item } = event.target.dataset;

      if (!data._selectedFilters.service)
        data._selectedFilters.service = copy(this.props.filters.service);

      const pos = data._selectedFilters.service.findIndex(
        (serv) => serv.query_name === item.query_name,
      );

      data._selectedFilters.service[pos].checked = value;

      this.setData(data);
    },

    onSelectSingleSection(event) {
      const { item, query_name } = event.target.dataset;
      const data = { ...this.data };

      if (
        data._selectedFilters[query_name] &&
        data._selectedFilters[query_name].query_value === item.query_value
      )
        data._selectedFilters[query_name] = null;
      else data._selectedFilters[query_name] = item;

      if (query_name === 'price') {
        data._selectedFilters.priceRange = {
          start: null,
          end: null,
        };
        data.error = '';
      }

      this.setData(data);
    },

    onInputPrice(event) {
      const { position } = event.target.dataset;
      const data = { ...this.data };
      const number = parseNumberFromMoney(event.detail.value);
      data._selectedFilters.price = null;

      if (!data._selectedFilters.priceRange)
        data._selectedFilters.priceRange = {};

      if (!number) {
        data._selectedFilters.priceRange[position] = null;
      } else {
        data._selectedFilters.priceRange[position] = {
          value: number,
          display: moneyFormatter(number, ''),
        };
      }

      this.setData(data);
      this.checkCorrectPrices();
    },

    validatePrices() {
      const { priceRange } = this.data._selectedFilters;
      if (!priceRange.end && !priceRange.start) {
        return true;
      }

      if (
        (priceRange.end && !priceRange.start) ||
        (!priceRange.end && priceRange.start)
      ) {
        this.setData({
          error: 'Vui lòng điền đẩy đủ giá bắt đầu và giá kết thúc',
        });
        return false;
      }

      if (priceRange.end.value <= priceRange.start.value) {
        this.setData({
          error: 'Giá kết thúc phải lớn hơn giá bắt đầu',
        });
        return false;
      }

      this.setData({
        error: '',
      });
      return true;
    },

    checkCorrectPrices() {
      const { priceRange } = this.data._selectedFilters;
      if (
        (!priceRange.end && !priceRange.start) ||
        priceRange.end.value > priceRange.start.value
      ) {
        this.setData({
          error: '',
        });
      }
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
