import { getProducts } from "../../../services/products";

Component({
  data: {
    tabs: [
      {
        title: "10:00",
        items: [],
      },
      {
        title: "15:00",
        items: [],
      },
      {
        title: "18:00",
        items: [],
      },
      {
        title: "20:00",
        items: [],
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
          index === tabIndex ? { ...tab, items: rs.data } : tab
        ),
      });
    },
    onTabClick({ index }) {
      this.setData({ tabIndex: index });
      this.getProductForTab(index);
    },
  },
});
