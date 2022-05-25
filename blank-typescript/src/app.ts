/// <reference path="../node_modules/@tiki.vn/tini-types/types/index.d.ts" />

import { Greeter } from "./entity/greeter";

App({
  // @ts-ignore ==> test ts ignore flag
  onLaunch(options) {
    console.log('App onLaunch');
    const greeter = new Greeter("my owner");
    greeter.greet();
  },
  // @ts-ignore ==> test ts ignore flag
  onShow(options) {
  },
});