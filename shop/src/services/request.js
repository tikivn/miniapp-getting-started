import { delay } from '../utils/common';

const request = async (res) => {
  await delay(300);
  return res;
};

export default request;
