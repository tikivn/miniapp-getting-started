
/// <reference lib="dom" /> 
// => fix missing setTimeout

import clone  from 'lodash-es/clone'

interface HomeData {
  value: string;
}
interface HomeDataCustomMethods {
  parseDataToString(data: HomeData): string;
} 
Page<HomeData, HomeDataCustomMethods>({
  data: { value: "is default value" },
  // @ts-ignore ==> test ts ignore flag
  onLoad(query = {}) {
   
    setTimeout(() => {
      this.setData(clone({ value: "has been changed" }));
    }, 1000);
  },
  parseDataToString(data:Object) {
    return JSON.stringify(data, null, 2);
  },
});
 
 