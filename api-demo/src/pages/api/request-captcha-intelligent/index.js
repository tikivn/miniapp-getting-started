Page({
  data: {
    captchaData: [
      {
        text: 'Intelligent w/ Fallback Mode',
        id: 'ce676b5e-2d42-420c-86c6-f991a833f271',
      },
      {
        text: 'Intelligent w/o Fallback Mode',
        id: 'cc5076df-9e81-42bd-a6fe-355931f3dd3f',
      },
    ],
  },

  requestCaptcha(e) {
    const {id} = e.currentTarget.dataset['captcha-data'];
    console.log('captchaId:', id);
    try {
      my.requestCaptcha({
        mode: 'captchaId',
        captchaId: id,
        env: 'dev', // Use dev env
        success: (seccode) => {
          my.showAlert({
            title: 'Captcha Verification Success',
            content: seccode,
          });
        },
        fail: (err) => {
          my.showAlert({
            title: 'Captcha Verification Fail',
            content: JSON.stringify(err),
          });
        },
      });
    } catch (err) {
      my.showAlert({
        title: 'Captcha Error',
        content: 'Cannot invoke my.requestCaptcha JSAPI!!!',
      });
    }
  },
  viewParams(e) {
    const {id} = e.currentTarget.dataset['captcha-data'];
    my.alert({ 
      title: 'Request Captcha Params',
      content: `{\n\tmode: 'captchaId',\n\tcaptchaId: '${id}',\n}`,
    });
  }
});
