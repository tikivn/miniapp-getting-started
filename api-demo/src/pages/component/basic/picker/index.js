Page({
  data: {
    array: Array.from(Array(10).keys()),
    objecttArray: Array.from(Array(10).keys()).map((i) => ({
      id: i,
      name: `Array ${i}`,
    })),
    arrayIndex: 0,
    objecttArrayIndex: 0,
  },
  onArrayChange(e) {
    console.log("array", e.detail.value);
    this.setData({
      arrayIndex: e.detail.value,
    });
  },
  onObjectArrayChange(e) {
    console.log("arrayObject", e.detail.value);
    this.setData({
      objecttArrayIndex: e.detail.value,
    });
  },
});
