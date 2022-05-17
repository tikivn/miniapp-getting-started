Page({
  data: {
    captchaData: [
      {
        text: 'Challenge Mode',
        challenge: '6e6587a9-dd34-411b-930a-7f60c1680266',
        embedUrl: 'https://captcha.tala.xyz/embed/challenges/6e6587a9-dd34-411b-930a-7f60c1680266',
        intelligent: false,
      },
    ],
  },

  requestCaptcha(e) {
    const params = e.currentTarget.dataset['captcha-data'];
    console.log('params:', JSON.stringify(params));
    try {
      my.requestCaptcha({
        ...params,
        mode: 'challenge',
        // challenge: challenge,
        // embedUrl: embedUrl,
        // intelligent: intelligent,
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
    const {challenge, embedUrl, intelligent} = e.currentTarget.dataset['captcha-data'];
    my.alert({ 
      title: 'Request Captcha Params',
      content: `{\n\tmode: 'challenge',\n\tchallenge: '${challenge}',\n\embedUrl: '${embedUrl}',\n\intelligent: '${intelligent}',\n}`,
    });
  }
});
