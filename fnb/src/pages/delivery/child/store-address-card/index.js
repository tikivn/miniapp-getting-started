import { navigateTo } from '../../../../helper';

Component({
  methods: {
    onStoreSelect() {
      navigateTo('store-search', { next: 'delivery' });
    },
  },
});
