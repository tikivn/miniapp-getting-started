import { flattenComponents } from '../../configs/components';
import { flattenApis } from '../../configs/apis';
import { debounce } from '../../libs/utils';

const notEmpty = (value) => value.trim().length > 0;

const search = (array, name) => {
  if (!notEmpty(name)) {
    return [];
  }
  return array.filter(
    (item) => item.path && item.name.toLowerCase().includes(`${name}`.trim().toLowerCase()),
  );
};

Page({
  data: {
    components: [],
    apis: [],
    notFound: false,
  },
  onReady() {
    this.onSearch = debounce(this.onSearch.bind(this), 100);
  },
  onInput(e) {
    const value = e.detail.value;

    this.setData({ value });
    this.onSearch(value);
  },
  onSearch(value) {
    const components = search(flattenComponents, value);
    const apis = search(flattenApis, value);
    const notFound = notEmpty(value) && !components.length && !apis.length;

    this.setData({
      components,
      apis,
      notFound,
    });
  },
});
