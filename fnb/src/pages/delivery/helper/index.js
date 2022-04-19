export async function calPosList(arr) {
  const rs = [];
  for (let i = 0; i < arr.length; i++) {
    const { _id: id } = arr[i];
    const pos = await new Promise((resolve) => {
      my.createSelectorQuery()
        .select(`#__${id}`)
        .boundingClientRect()
        .scrollOffset()
        .exec((ret) => {
          resolve(ret);
        });
    });
    rs[`_${id}`] = pos[0].top;
  }
  return rs;
}
