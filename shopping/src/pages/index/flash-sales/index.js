import { getProducts } from "../../../services/products";

const initTabs = () => [
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
];

Component({
  data: {
    tabs: initTabs(),
    tabIndex: 0,
  },
  didMount() {
    this.getProductForTab(0);
    getApp().refreshEvent.on("index/refresh", () => {
      this.setData({ tabIndex: 0, tabs: initTabs() });
      this.getProductForTab(0);
    });
  },
  didUnmount() {
    getApp().refreshEvent.removeListener("index/refresh");
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
