import { navigateTo } from '../../../../helper';

Component({
  props: {},
  methods: {
    onTap() {
      navigateTo('address');
    },
    onStoreSelect() {
      navigateTo('store-search', { next: 'delivery' });
    },
  },
});
