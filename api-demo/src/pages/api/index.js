import { APIList } from '../../configs/apis';

Page({
  data: {
    APIList,
  },
  onListPress(path) {
    my.navigateTo({ url: path });
  },
  goToSearch() {
    my.navigateTo({ url: 'pages/search/index' });
  },
});
