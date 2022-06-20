import { filterNotImplementedPages } from '../libs/utils';

const basicAPIList = [
  {
    name: 'Get App Secret',
    path: 'pages/api/get-app-secret/index',
  },
  {
    name: 'Get App Id',
    path: 'pages/api/get-app-id/index',
  },
  {
    name: 'Get Launch Options',
    path: 'pages/api/get-launch-options/index',
  },
].filter(filterNotImplementedPages);

const openAPIList = [
  {
    name: 'Get User Info',
    path: 'pages/api/get-user-info/index',
  },
  {
    name: 'Get User Token',
    path: 'pages/api/get-user-token/index',
  },
  {
    name: 'Get Refresh Token',
    path: 'pages/api/get-refresh-token/index',
  },
  {
    name: 'Get Auth Code',
    path: 'pages/api/get-auth-code/index',
  },
  {
    name: 'Is User Logged In',
    path: 'pages/api/is-user-logged/index',
  },
  {
    name: 'Address',
    path: 'pages/api/address/index',
  },
  {
    name: 'Request Payment',
    // path: 'pages/api/request-payment/index',
  },
  {
    name: 'Call Security System',
    path: 'pages/api/call-security-system/index',
  },
  {
    name: 'Get User Open Data',
    path: 'pages/api/get-open-data/index',
  },
].filter(filterNotImplementedPages);

const interfaceAPIList = [
  {
    name: 'Animation',
    path: 'pages/api/animation/index',
  },
  {
    name: 'Alert',
    path: 'pages/api/alert/index',
  },
  {
    name: 'Confirm',
    path: 'pages/api/confirm/index',
  },
  {
    name: 'Toast',
    path: 'pages/api/toast/index',
  },
  {
    name: 'Loading',
    path: 'pages/api/loading/index',
  },
  {
    name: 'Action Sheet',
    path: 'pages/api/action-sheet/index',
  },
  {
    name: 'Prompt',
    path: 'pages/api/prompt/index',
  },
  {
    name: 'Navigator',
    path: 'pages/api/navigator/index',
  },
  {
    name: 'Keyboard',
    path: 'pages/api/keyboard/index',
  },
  {
    name: 'Canvas',
    path: 'pages/api/canvas/index',
  },
  {
    name: 'Option selector',
    path: 'pages/api/option-selector/index',
  },
  {
    name: 'Date Picker',
    path: 'pages/api/datepicker/index',
  },
  {
    name: 'Cascade selection',
    path: 'pages/api/multi-level-select/index',
  },
  {
    name: 'Page Scroll To',
    path: 'pages/api/page-scroll-to/index',
  },
].filter(filterNotImplementedPages);

const navigationBarAPIList = [
  {
    name: 'Get title color',
    path: '/pages/api/navigation-bar/get-title-color/index',
  },
  {
    name: 'Set navigation bar',
    path: '/pages/api/navigation-bar/set-navigation-bar/index',
  },
  {
    name: 'Show/Hide navigation bar loading',
    path: '/pages/api/navigation-bar/loading/index',
  },
  {
    name: 'Hide Back Home',
    path: '/pages/api/navigation-bar/hide-back-home/index',
  },
].filter(filterNotImplementedPages);

const mediaImageAPIList = [
  {
    name: 'Choose Image',
    path: '/pages/api/image-picker/index',
  },
  {
    name: 'Compress Image',
    path: '/pages/api/compress-image/index',
  },
  {
    name: 'Crop Image',
    path: '/pages/api/crop-image/index',
  },
  {
    name: 'Save Image',
    path: '/pages/api/save-image/index',
  },
  {
    name: 'Get Image Info',
    path: '/pages/api/get-image-info/index',
  },
  {
    name: 'Preview Image',
    path: '/pages/api/preview-image/index',
  },
].filter(filterNotImplementedPages);

const mediaVideoAPIList = [
  {
    name: 'Choose Video',
    path: '/pages/api/choose-video/index',
  },
  {
    name: 'Trim Video',
    path: '/pages/api/trim-video/index',
  },
  {
    name: 'Compress Video',
    path: '/pages/api/compress-video/index',
  },
].filter(filterNotImplementedPages);

const deeplinkAPIList = [
  {
    name: 'Open Screen',
    path: '/pages/api/open-screen/index',
  },
].filter(filterNotImplementedPages);

const fileAPIList = [
  {
    name: 'File System',
    path: '/pages/api/file/index',
  },
].filter(filterNotImplementedPages);

const pullRefreshAPIList = [
  {
    name: 'Pull down to refresh',
    path: 'pages/api/pull-refresh/index',
  },
];

const storageAPIList = [
  {
    name: 'Storage',
    path: 'pages/api/storage/index',
  },
];

const updateClientAPIList = [
  {
    name: 'Check Latest Version',
    path: 'pages/api/update-client/index',
  },
  {
    name: 'Open Native Store',
    path: 'pages/api/open-native-store/index',
  },
];

const phoneAPIList = [
  {
    name: 'Make Phone Call',
    path: 'pages/api/make-phone-call/index',
  },
];

const tikiAPIList = [
  {
    name: 'Add To Cart',
    path: 'pages/api/add-to-cart/index',
  },
  {
    name: 'Get Cart',
    path: 'pages/api/get-cart/index',
  },
  {
    name: 'Make Payment V2',
    path: 'pages/api/make-payment-V2/index',
  },
];

const scanAPIList = [
  {
    name: 'Scan QR/Barcode',
    path: 'pages/api/scan-qr/index',
  },
];
const clipboardAPIList = [
  {
    name: 'Get/Set Clipboard',
    path: 'pages/api/clipboard/index',
  },
];
const deviceAPIList = [
  {
    name: 'SDK Version',
    // path: '/pages/API/sdk-version/index',
  },
  {
    name: 'Contact',
    path: 'pages/api/contact/index',
  },
  {
    name: 'Battery',
    path: 'pages/api/battery/index',
  },
  {
    name: 'Brightness',
    path: 'pages/api/brightness/index',
  },
  {
    name: 'Open setting',
    path: 'pages/api/open-setting/index',
  },
  {
    name: 'Open App Setting',
    path: 'pages/api/open-app-setting/index',
  },
  {
    name: 'Network Type',
    path: '/pages/api/network-type/index',
  },
  {
    name: 'Vibration',
    path: '/pages/api/vibration/index',
  },
  {
    name: 'Compass',
    path: '/pages/api/compass/index',
  },
  {
    name: 'Shake',
    path: '/pages/api/shake/index',
  },
  {
    name: 'System Info',
    path: '/pages/api/system-info/index',
  },
  {
    name: 'SDK Version',
    path: '/pages/api/sdk-version/index',
  },
  {
    name: 'Acceleronmeter',
    path: '/pages/api/acceleronmeter/index',
  },
  {
    name: 'User screenshot event',
    path: '/pages/api/user-screenshot-event/index',
  },
].filter(filterNotImplementedPages);

const networkAPIList = [
  {
    name: 'HTTP Request',
    path: '/pages/api/request/index',
  },
  {
    name: 'Download File',
    path: '/pages/api/download-file/index',
  },
  {
    name: 'Upload File',
    path: '/pages/api/upload-file/index',
  },
  {
    name: 'Upload File To GCP',
    path: '/pages/api/gcp-upload-file/index',
  },
];

const locationAPIList = [
  {
    name: 'Get Location',
    path: 'pages/api/get-location/index',
  },
];

const notificationAPIList = [
  {
    name: 'Check Notification Permission',
    path: 'pages/api/check-notification/index',
  },
  {
    name: 'Check Native Permission',
    path: 'pages/api/check-native-permissions/index',
  },
];

const fontAPIList = [
  {
    name: 'Load Font Face',
    path: 'pages/api/load-font-face/index',
  },
];

const paymentAPIList = [
  {
    name: 'Checkout',
    path: 'pages/api/checkout/index',
  },
];

const captchaAPIList = [
  {
    name: 'Request Captcha',
    path: 'pages/api/request-captcha/index',
  },
  {
    name: 'Request Captcha Intelligent',
    path: 'pages/api/request-captcha-intelligent/index',
  },
  {
    name: 'Request Captcha w/ Challenge',
    path: 'pages/api/request-captcha-challenge/index',
  },
];

const bioMetricsAPIList = [
  {
    name: 'Local authentication',
    path: 'pages/api/bio-metrics/local/index',
  },
  {
    name: 'Server side authentication',
    path: 'pages/api/bio-metrics/server/index',
  },
];

const APIList = [
  {
    type: 'Basic API',
    list: basicAPIList,
  },
  {
    type: 'Open API',
    list: openAPIList,
  },
  {
    type: 'Interface API',
    list: interfaceAPIList,
  },
  {
    type: 'Pull Down To Refresh API',
    list: pullRefreshAPIList,
  },
  {
    type: 'Cache',
    list: storageAPIList,
  },
  {
    type: 'Device API',
    list: deviceAPIList,
  },
  {
    type: 'Network API',
    list: networkAPIList,
  },
  {
    type: 'Navigation Bar API',
    list: navigationBarAPIList,
  },
  {
    type: 'Media Image',
    list: mediaImageAPIList,
  },
  {
    type: 'Media Video',
    list: mediaVideoAPIList,
  },
  {
    type: 'Open Screen',
    list: deeplinkAPIList,
  },
  {
    type: 'File',
    list: fileAPIList,
  },
  {
    type: 'Location',
    list: locationAPIList,
  },
  {
    type: 'Store',
    list: updateClientAPIList,
  },
  {
    type: 'Phone',
    list: phoneAPIList,
  },
  {
    type: 'Tiki Service',
    list: tikiAPIList,
  },
  {
    type: 'Scan',
    list: scanAPIList,
  },
  {
    type: 'Clipboard',
    list: clipboardAPIList,
  },
  {
    type: 'Notifications',
    list: notificationAPIList,
  },
  {
    type: 'Font',
    list: fontAPIList,
  },
  {
    type: 'Captcha',
    list: captchaAPIList,
  },
  {
    type: 'Bio Metrics',
    list: bioMetricsAPIList,
  },
  {
    type: 'Payment',
    list: paymentAPIList,
  },
];

const flattenApis = APIList.reduce((rs, item) => rs.concat(item.list), []);

export { APIList, flattenApis };
