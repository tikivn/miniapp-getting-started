import { splitStoreArray } from "./helper";

Component({
  props: {
    status: "LOADING",
    stores: [],
    onSelect() {},
  },
  data: {
    favorite: [],
    other: [],
  },
  methods: {
    onSelect(e) {
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
