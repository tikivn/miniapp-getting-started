class Target {
  constructor() {
    this.data = [];
    this.config = {
      debugJSAPI: true,
    };
  }

  addLogItem(item) {
    // we store the last element at top of the array
    this.data.unshift(item);
  }

  debug(...params) {
    this.addLogItem({
      type: 'log',
      createdAt: new Date().getTime(),
      params: {
        input: params.join(' '),
        result: 'ok',
        latency: 0,
      },
    });
  }

  clearLog() {
    this.data = [];
  }

  promisify(func, name) {
    return (...params) => {
      return new Promise((resolve, reject) => {
        let logItem;
        let createdAt;
        if (this.config.debugJSAPI) {
          createdAt = new Date().getTime();
          logItem = {
            type: `myx.${name}`,
            createdAt,
            params: {
              input: params,
            },
          };
          this.addLogItem(logItem);
        }

        func({
          ...params[0],
          success: (result) => {
            if (this.config.debugJSAPI) {
              logItem.params.result = result;
            }
            resolve(result);
          },
          fail: (error) => {
            if (this.config.debugJSAPI) {
              logItem.params.error = error;
            }
            reject(error);
          },
          complete: () => {
            if (this.config.debugJSAPI) {
              logItem.params.latency = new Date().getTime() - createdAt;
            }
          },
        });
      });
    };
  }
}

const target = new Target();
const handler = {
  get: function (target, prop, receiver) {
    if (target[prop]) {
      return target[prop];
    }

    if (!my[prop]) {
      console.warn(`API myx.${prop} does not exist.`);
      return;
    }

    return target.promisify(my[prop], prop);
  },
};

const myx = new Proxy(target, handler);

export default myx;
