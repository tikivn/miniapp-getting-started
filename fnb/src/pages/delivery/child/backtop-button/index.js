import { $component } from '@tiki.vn/redux-miniprogram-bindings';

$component({
  mapState: [
    (state) => ({
      cart: state.cart,
    }),
  ],
})({
  props: {
    onBackToTop() {},
  },
  methods: {
    _backToTop() {
      this.props.onBackToTop();
    },
  },
});
