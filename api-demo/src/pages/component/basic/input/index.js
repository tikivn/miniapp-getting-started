Page({
  data: {
    inputTypes: [
      'default',
      'email-address',
      'numeric',
      'phone-pad',
      'number-pad',
      'decimal-pad',
      'ascii-capable',
      'numbers-and-punctuation',
      'url',
      'name-phone-pad',
      'twitter',
      'web-search',
      'visible-password',
    ],
    confirmTypes: [
      'done',
      'go',
      'next',
      'search',
      'send',
      'none',
      'previous',
      'default',
      'emergency-call',
      'google',
      'join',
      'route',
      'yahoo',
    ],
  },
  onPageScroll() {
    console.log('onPageScroll');
  },
  onInput(e) {
    console.log('onInput', e);
  },
  onConfirm(e) {
    console.log('onConfirm', e);
  },
  onFocus(e) {
    console.log('onFocus', e);
  },
  onBlur(e) {
    console.log('onBlur', e);
  },
});
