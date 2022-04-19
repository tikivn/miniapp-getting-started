import { navigateTo } from '../../../../helper';

Component({
  props: {
    headerType: '',
    banners: [],
    status: '',
    campaigns: [],
  },
  methods: {
    onSelect() {
      navigateTo('web-view-page');
    },
  },
});
