import { getProducts } from "../../../services/products";

const now = new Date();

Component({
  data: {
    loading: true,
    products: [],
    saleDate: `${now.getDate()}/${now.getMonth() + 1}`,
  },
  async didMount() {
    const rs = await getProducts();
    this.setData({ products: rs.data, loading: false });
  },
});
