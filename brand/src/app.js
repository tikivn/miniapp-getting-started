import { getSystemInfo } from './utils/system';

App({
  brandName: 'apple',
  brandLogo:
    'https://salt.tikicdn.com/ts/miniapp/f5/19/83/44d96fa4c4bb3737675cc1d7066fe825.png',
  brandCover:
    'https://salt.tikicdn.com/ts/miniapp/e7/c7/7a/bea940e9b1037e9531bef9c210de617c.png',

  onLaunch() {
    getSystemInfo();
  },
});
