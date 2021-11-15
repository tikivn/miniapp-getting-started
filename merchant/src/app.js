import { getSystemInfo } from './utils/system';

App({
  // Config seller id here
  sellerId: 1,

  onLaunch() {
    getSystemInfo();
  },
});
