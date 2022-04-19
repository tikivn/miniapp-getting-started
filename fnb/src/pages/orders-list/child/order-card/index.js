import { navigateTo } from '../../../../helper';
import { constants as c } from '../../../../constants';

Component({
  props: {
    status: 'LOADING',
  },
  data: {
    badges: {
      [c.DELIVERY]: {
        [c.PREPARING]: {
          content: 'Preparing',
          color: 'orange60',
          bg: 'orange10',
        },
        [c.DELIVERING]: {
          content: 'Delivering',
          color: 'brand',
          bg: 'blue10',
        },
        [c.DELIVERED]: {
          content: 'Delivered',
          color: 'green60',
          bg: 'green10',
        },
        [c.FAIL]: {
          content: 'Delivery failed',
          color: 'red60',
          bg: 'red10',
        },
      },
      [c.STORE_PICKUP]: {
        [c.RECEIVED]: {
          content: 'Order received',
          color: 'orange60',
          bg: 'orange10',
        },
        [c.COMPLETED]: {
          content: 'Order completed',
          color: 'green60',
          bg: 'green10',
        },
        [c.READY]: {
          content: 'Ready for pickup',
          color: 'brand',
          bg: 'blue10',
        },
      },
    },
  },
  didMount() {},
  methods: {
    onSelect() {
      navigateTo('order-detail', { id: this.props.order._id });
    },
  },
});
