import { getProducts } from "../../../services/products";

Component({
  data: {
    loading: true,
    products: [],
  },
  async didMount() {
    const rs = await getProducts();
    this.setData({ products: rs.data, loading: false });
  },
});
