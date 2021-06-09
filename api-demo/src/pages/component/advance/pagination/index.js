let abortController = null;
Page({
  data: {
    loading: false,
    currentPage: 1,
    cached: {},
    products: [],
  },
  onLoad() {
    this.onPageChange(1, 5);
  },
  async onPageChange(page) {
    if (this.data.currentPage === page && !this.data.loading) {
      return;
    }
    if (this.data.loading) {
      if (abortController) {
        abortController.abort();
      }
    }
    this.setData({
      currentPage: page,
      loading: true,
    });

    abortController = new AbortController();
    const products = await request(page - 1, 5, {
      signal: abortController.signal,
    });
    this.setData({
      loading: false,
      products,
    });
  },
});
function request(page, limit, { signal }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (signal.aborted) {
        reject("cancel");
        return;
      }
      resolve(
        Array(5)
          .fill("")
          .map((_, idx) => `item ${page * limit + idx}`)
      );
    }, 1000);
  });
}
