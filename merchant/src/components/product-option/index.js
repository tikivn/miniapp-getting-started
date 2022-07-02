import { isEqual } from '../../utils/common';

Component({
  props: {
    product: {},
    selectedProduct: {},
    option: {
      code: '',
      show_preview_image: false,
      name: '',
      values: [],
    },
    onConfirm: () => {},
  },

  data: {
    isShow: false,
    formattedValues: [],
    selectingProduct: {},
  },

  methods: {
    listOptions: null,

    handleShowBottomSheet() {
      this.setData({
        isShow: true,
      });
    },

    handleHideBottomSheet({ isSelect = false }) {
      const data = {
        isShow: false,
      };

      if (!isSelect) {
        data.selectingProduct = this.props.selectedProduct;
      }

      this.setData({
        ...data,
      });
    },

    handleOnSelect(event) {
      const { item } = event.target.dataset;
      const code = this.props.option.code;
      const value = item.label;

      const { product } = this.props;
      const { selectingProduct } = this.data;
      const listOptions = (this.listOptions = this.listOptions
        ? this.listOptions
        : product.configurable_options.map((item) => item.code));
      const currentOptionValues = listOptions.reduce(
        (acc, item) => ({
          ...acc,
          [item]: selectingProduct[item],
        }),
        {},
      );
      const newOptionValues = {
        ...currentOptionValues,
        [code]: value,
      };
      const newSelectingProduct = product.configurable_products.find((item) =>
        Object.keys(newOptionValues).every(
          (code) => item[code] === newOptionValues[code],
        ),
      );

      if (newSelectingProduct)
        this.setData({
          selectingProduct: newSelectingProduct,
        });
      else {
        const otherSelectingProduct = product.configurable_products.find(
          (item) => item[code] === value,
        );
        this.setData({
          selectingProduct: otherSelectingProduct,
        });
      }
    },

    handleOnConfirm() {
      this.props.onConfirm(this.data.selectingProduct);
      this.handleHideBottomSheet({ isSelect: true });
    },
  },

  // Life cycle
  deriveDataFromProps(nextProps) {
    const { code } = this.props.option;
    const { configurable_products: current_configurable_products } =
      this.props.product;
    const { values = [] } = nextProps.option;
    const { configurable_products: next_configurable_products } =
      nextProps.product;
    const { formattedValues } = this.data;

    if (
      formattedValues.length === 0 ||
      !isEqual(current_configurable_products, next_configurable_products)
    ) {
      const formattedValues = values.map((value) => {
        const targetProduct = next_configurable_products.find(
          (item) => item[code] === value.label,
        );

        if (targetProduct)
          return {
            ...value,
            preview: targetProduct.thumbnail_url,
          };

        return value;
      });

      this.setData({
        formattedValues,
      });
    }

    if (
      typeof this.data.selectingProduct.id === 'undefined' ||
      !isEqual(nextProps.selectedProduct, this.props.selectedProduct)
    ) {
      this.setData({
        selectingProduct: nextProps.selectedProduct,
      });
    }
  },
});
