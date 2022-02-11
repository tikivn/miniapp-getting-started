import EventEmitter from '../utils/emitter';
import { EVENTS } from '../utils/constant';

const event = new EventEmitter();
let filters = {};

export const formatFilters = (list) => {
  const filteredList = list.filter((item) =>
    ['category', 'stock_location', 'price'].includes(item.query_name),
  );

  const map = filteredList.reduce((acc, curr) => {
    acc[curr.query_name] = curr.values;
    return acc;
  }, {});

  map.service = [
    {
      query_name: 'support_p2h_delivery',
      thumbnail_url: '/assets/images/filter-tikinow.png',
      display_value: 'TIKINOW',
      description: 'Giao siêu tốc 2h',
      checked: false,
    },
    {
      query_name: 'freeship_campaign',
      thumbnail_url: '/assets/images/filter-freeship.png',
      display_value: 'FREESHIP',
      description: 'Không giới hạn',
      checked: false,
    },
    {
      query_name: 'is_best_price_guaranteed',
      display_value: 'Rẻ Hơn Hoàn Tiền',
      checked: false,
    },
  ];

  return map;
};

export const formatFiltersToQuery = (filter) => {
  return Object.entries(filter).reduce((acc, [key, value]) => {
    if (!key || !value) return acc;

    if (key === 'service') {
      const checkedServices = value
        .filter((item) => item.checked)
        .reduce((acc, curr) => {
          return {
            ...acc,
            [curr.query_name]:
              curr.query_name === 'freeship_campaign' ? 'freeship_plus' : 1,
          };
        }, {});

      return { ...acc, ...checkedServices };
    }

    if (key === 'priceRange') {
      if (value.start && value.end)
        return { ...acc, price: `${value.start.value},${value.end.value}` };
      return acc;
    }

    return { ...acc, [key]: value.query_value };
  }, {});
};

export const emitUpdateFilters = (filter) =>
  event.emit(EVENTS.UPDATE_FILTERS, filter);

export const onUpdateFilters = (func) => event.on(EVENTS.UPDATE_FILTERS, func);

export const updateFilters = (nextFilters) => {
  filters = formatFilters(nextFilters);
  emitUpdateFilters(nextFilters);
};

export { filters };
