import { constants as c } from '../../../constants';

export function initData(arr, finishedOnly = false) {
  arr = arr.filter((v) => {
    const isFinished = [c.COMPLETED, c.FAIL, c.DELIVERED].includes(v.status);
    return finishedOnly ? isFinished : !isFinished;
  });
  let rs = {
    [c.DELIVERY]: [],
    [c.STORE_PICKUP]: [],
  };
  arr.forEach((v) => {
    rs[v.orderMethod].push(v);
  });
  return rs;
}
