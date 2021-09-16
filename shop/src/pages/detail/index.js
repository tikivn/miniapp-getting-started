import { getDetailProduct, getNewProductsAPI } from '../../services/index';

Page({
  data: {
    isShowOption: false,
    isLoading: true,
    product: {},
    newProducts: [],
    type: "color",
    colorSelected: {
      id: '',
      color: '',
      image: '',
    },
    sizeSelected: {
      id: '',
      size: ''
    },
    toast: {
      isShow: false,
      content: '',
      showAt: '',
    },
  },

  onTapProduct() {
      my.navigateTo({ url: 'pages/detail/index' });
  },

  showToast(content) {
    this.setData({
      toast: {
        isShow: true,
        content,
        showAt: Date.now(),
      },
    });
  },

  hideToast() {
    this.setData({
      toast: {
        isShow: false,
        content: '',
        showAt: '',
      },
    });
  },

  onClickBuyNow() {
    this.showToast(`Add to cart successfully`);
  },

  onSelectColor(){
    this.setData({
      type: "color",
      isShowOption: true,
    })
  },

  onSelectSize(){
    this.setData({
      type: "size",
      isShowOption: true,
    })
  },

  onCloseOption(){
    this.setData({
      isShowOption: false,
    })
  },

  onDoneOption(option){
    const { type } = this.data;

    if (type === 'color'){
      this.setData({
        colorSelected: option,
        isShowOption: false
      })
    } else {
       this.setData({
        sizeSelected: option,
        isShowOption: false
      })
    }
  },

  async loadData() {
    this.setData({
      isLoading: true,
    });

    try {
      const [product, newProducts] = await Promise.all([
        getDetailProduct(),
        getNewProductsAPI(),
      ]);

      this.setData({
        product,
        newProducts,
        isLoading: false,
        colorSelected: product.colors[0],
        sizeSelected: product.sizes[0]
      });
    } catch (error) {
      this.setData({
        isLoading: false,
      });
    }
  },

  // Life cycle
  onReady() {
    this.loadData();
  },
});
