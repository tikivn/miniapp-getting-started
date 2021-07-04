import { getProducts } from "../../../services/products";

Component({
  data: {
    tabs: [
      {
        title: "10:00",
        items: [],
        loading: true,
      },
      {
        title: "15:00",
        items: [],
        loading: true,
      },
      {
        title: "18:00",
        items: [],
        loading: true,
      },
      {
        title: "20:00",
        items: [],
        loading: true,
      },
    ],
    tabIndex: 0,
  },
  didMount() {
    this.getProductForTab(0);
  },
  methods: {
    async getProductForTab(tabIndex) {
      if (this.data.tabs[tabIndex].items.length) {
        return;
      }
      const rs = await getProducts();
      this.setData({
        tabs: this.data.tabs.map((tab, index) =>
          index === tabIndex ? { ...tab, items: rs.data, loading: false } : tab
        ),
      });
    },
    onTabClick({ index }) {
      this.setData({ tabIndex: index });
      this.getProductForTab(index);
    },
  },
});
