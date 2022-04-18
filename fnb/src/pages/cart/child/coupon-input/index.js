import { $component } from "@tiki.vn/redux-miniprogram-bindings";

import { debounce } from "../../../../helper";

Component({
  props: {
    isShow: false,
    onClose() {},
    onApplyCoupon() {},
  },
  data: {
    code: "",
  },
  onInit() {
    this.onInput = debounce(this.onInput, 500);
  },
  methods: {
    onClose() {
      this.props.onClose();
    },
    onInput(e) {
      this.setData({ code: e.detail.value });
    },
    onApplyCoupon() {
      this.props.onApplyCoupon(this.data.code);
      this.props.onClose();
    },
  },
});
