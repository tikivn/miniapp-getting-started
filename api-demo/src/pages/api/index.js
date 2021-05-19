import { filterNotImplementedPages } from "../../libs/utils";

const openAPIList = [
  {
    name: "Get User Info",
    path: "pages/api/get-user-info/index",
  },
  {
    name: "Get Auth Code",
    path: "pages/api/get-auth-code/index",
  },
  {
    name: "Request Payment",
    // path: 'pages/api/request-payment/index',
  },
].filter(filterNotImplementedPages);

const interfaceAPIList = [
  {
    name: "Animation",
    path: "pages/api/animation/index",
  },
  {
    name: "Alert",
    path: "pages/api/alert/index",
  },
  {
    name: "Confirm",
    path: "pages/api/confirm/index",
  },
  {
    name: "Toast",
    path: "pages/api/toast/index",
  },
  {
    name: "Loading",
    path: "pages/api/loading/index",
  },
  {
    name: "Action Sheet",
    path: "pages/api/action-sheet/index",
  },
  {
    name: "Prompt",
    path: "pages/api/prompt/index",
  },
  {
    name: "Navigator",
    path: "pages/api/navigator/index",
  },
  {
    name: "Keyboard",
    path: "pages/api/keyboard/index",
  },
].filter(filterNotImplementedPages);

const navigationBarAPIList = [
  {
    name: "Get title color",
    path: "/pages/api/navigation-bar/get-title-color/index",
  },
  {
    name: "Set navigation bar",
    path: "/pages/api/navigation-bar/set-navigation-bar/index",
  },
  {
    name: "Show/Hide navigation bar loading",
    path: "/pages/api/navigation-bar/loading/index",
  },
  {
    name: "Hide Back Home",
    path: "/pages/api/navigation-bar/hide-back-home/index",
  },
].filter(filterNotImplementedPages);

const imagePickerAPIList = [
  {
    name: "Choose Image",
    path: "/pages/api/image-picker/index",
  },
].filter(filterNotImplementedPages);

const deeplinkAPIList = [
  {
    name: "Open Deeplink",
    path: "/pages/api/deep-link/index",
  },
].filter(filterNotImplementedPages);

const pullRefreshAPIList = [
  {
    name: "Pull down to refresh",
    path: "pages/api/pull-refresh/index",
  },
];

const storageAPIList = [
  {
    name: "Storage",
    path: "pages/api/storage/index",
  },
];

const deviceAPIList = [
  {
    name: "SDK Version",
    // path: '/pages/API/sdk-version/index',
  },
].filter(filterNotImplementedPages);

const networkAPIList = [
  {
    name: "HTTP Request",
    path: "/pages/api/request/index",
  },
];

const APIList = [
  {
    type: "Open API",
    list: openAPIList,
  },
  {
    type: "Interface API",
    list: interfaceAPIList,
  },
  {
    type: "Pull Down To Refresh API",
    list: pullRefreshAPIList,
  },
  {
    type: "Cache",
    list: storageAPIList,
  },
  {
    type: "Device API",
    list: deviceAPIList,
  },
  {
    type: "Network API",
    list: networkAPIList,
  },
  {
    type: "Navigation Bar API",
    list: navigationBarAPIList,
  },
  {
    type: "Image Picker",
    list: imagePickerAPIList,
  },
  {
    type: "Deeplink",
    list: deeplinkAPIList,
  },
];

Page({
  data: {
    APIList,
  },
  onListPress(path) {
    my.navigateTo({ url: path });
  },
});
