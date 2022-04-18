import { splitStoreArray } from './helper';

Component({
  props: {
    status: 'LOADING',
    stores: [],
    onSelect() {},
  },
  data: {
    favorite: [],
    other: [],
  },
  methods: {
    onSelect(e) {
      console.log(this.props);
      this.props.onSelect(e);
    },
  },
  didMount() {
    this.setData({
      ...splitStoreArray(this.props.stores),
    });
  },
  didUpdate() {
    this.setData({
      ...splitStoreArray(this.props.stores),
    });
  },
});
