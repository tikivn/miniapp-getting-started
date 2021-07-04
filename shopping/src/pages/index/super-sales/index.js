import { getProducts } from "../../../services/products";

const now = new Date();

Component({
  data: {
    loading: true,
    products: [],
    saleDate: `${now.getDate()}/${now.getMonth() + 1}`,
  },
  async didMount() {
    this.loadData();
    getApp().refreshEvent.on("index/refresh", () => {
      this.loadData();
    });
  },
  didUnmount() {
    getApp().refreshEvent.removeListener("index/refresh");
  },
  async loadData() {
    this.setData({ loading: true });
    const rs = await getProducts();
    this.setData({ products: rs.data, loading: false });
  },
});
