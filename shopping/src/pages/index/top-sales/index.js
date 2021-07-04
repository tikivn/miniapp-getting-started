import { getProducts } from "../../../services/products";

Component({
  data: {
    loading: true,
    products: [],
  },
  async didMount() {
    this.loadData();
  },
  async loadData() {
    this.setData({ loading: true });
    const rs = await getProducts();
    this.setData({ products: rs.data, loading: false });
  },
});
