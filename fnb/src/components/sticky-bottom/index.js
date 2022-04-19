import { $component } from '@tiki.vn/redux-miniprogram-bindings';
import { navigateTo } from '../../helper';

$component({
  mapState: [
    (state) => ({
      cart: state.cart,
    }),
  ],
})({
  methods: {
    onTap() {
      navigateTo('cart', { orderMethod: this.props.orderMethod });
    },
  },
});
