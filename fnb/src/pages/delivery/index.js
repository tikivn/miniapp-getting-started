/* eslint-disable no-undef */
import { $page } from "@tiki.vn/redux-miniprogram-bindings";

import { getData } from "../../services";
import { constants as c } from "../../constants";
import { navigateTo, queryToObj, redirectTo } from "../../helper";
import { getAllStore } from "../../store/actions/store";
import { getBuyerInfo } from "../../store/actions/buyer";
import { getAllCategories } from "../../store/actions/category";

import { calPosList } from "./helper";

$page({
  mapState: [
    (state) => ({
      categories: state.category.list,
      buyer: state.buyer,
      store: state.store.defaultStore,
      cart: state.cart,
    }),
  ],
  mapDispatch: { getAllCategories, getBuyerInfo, getAllStore },
})({
  data: {
    topHeight: 0,
    currentPos: 0,
    pList: null,
    currentTag: "",
    orderMethod: "",
    status: c.LOADING,
    holderStatus: "none",
  },
  async onLoad(query) {
    let title = "Store pickup";
    const orderMethod = queryToObj(query).method;

    if (orderMethod === c.DELIVERY) title = "Delivery";
    my.setNavigationBar({ title });

    if (orderMethod === c.DELIVERY && this.data.buyer.status === c.LOADING) {
      await this.getBuyerInfo();
    }
    if (!this.data.store) {
      await this.getAllStore();
    }
    const categories = await getData("categories");
    this.setData({
      categories,
      status: c.SUCCESS,
      orderMethod,
    });
    my.addIconsToNavigationBar({
      icons: [
        {
          image: "/assets/search_icon.png",
          width: 24,
          height: 24,
        },
      ],
      padding: 10,
    });
    if (!this.data.pList) {
      const pList = await calPosList(this.data.categories);
      this.setData({
        pList,
      });
    }
  },
  onShow() {
    const pages = getCurrentPages();
    const pagePath = pages[pages.length - 1].route;
    if (pagePath && pagePath !== "pages/delivery/index") {
      redirectTo("delivery", { method: this.data.orderMethod });
    }
  },
  async onTagClick(e) {
    if (!this.data.pList) {
      const pList = await calPosList(this.data.categories);
      this.setData({
        pList,
      });
    }
    const { id } = e.target;

    const [top] = await new Promise((resolve) => {
      my.createSelectorQuery()
        .selectViewport()
        .select(`#${id}`)
        .boundingClientRect()
        .scrollOffset()
        .exec((ret) => {
          resolve([ret[0].top]);
        });
    });
    // new pos = pos of tag section in page - header height - (pos of category tag - header height)
    //         = pos of tag section in page - pos of category tag

    this.setData({
      ...this.data,
      currentPos: this.data.pList[id] - top,
      holderStatus: "active",
      currentTag: id.replace("_", ""),
    });
    setTimeout(() => {
      this.setData({ ...this.data, holderStatus: "none" });
    }, 500);
  },
  async backToTop() {
    await this.onTagClick({
      target: { id: `_${this.data.categories[0]._id}` },
    });
  },
  onProductClick(p) {
    const { _id: id, name } = p;
    navigateTo("product-detail", { method: this.data.orderMethod, id, name });
  },
  onCustomIconEvent(e) {
    navigateTo("product-search", { method: this.data.orderMethod });
  },
});
