Page({
  data: {
    captchaData: [
      {
        text: 'Slide Mode',
        id: '6d9cef9c-6a0c-11ec-90d6-0242ac120003',
      },
      {
        text: 'Puzzle Mode',
        id: '93ef5b45-4d71-4c1b-a574-e8586ee1043a',
      },
      {
        text: 'Text Mode',
        id: '4f02d0a5-cdb1-42b9-9b43-5fed9f7d8f3e',
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
