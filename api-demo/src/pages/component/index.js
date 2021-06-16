const basicComponents = [
  {
    name: "View container",
    components: [
      {
        name: "View",
        path: "",
      },
      {
        name: "Movable View",
        path: "pages/component/basic/movable-view/index",
      },
      {
        name: "Carousel",
        path: "/pages/component/basic/carousel/index",
      },
      {
        name: "Scroll View",
        path: "/pages/component/basic/scroll-view/index",
      },
    ],
  },
  {
    name: "Basic content",
    components: [
      {
        name: "Text",
        path: "/pages/component/basic/text/index",
      },
      {
        name: "Icon",
        path: "/pages/component/basic/icon/index",
      },
      {
        name: "Progress",
        path: "/pages/component/basic/progress/index",
      },
    ],
  },
  {
    name: "Form component",
    components: [
      {
        name: "Form",
        path: "/pages/component/basic/form/index",
      },
      {
        name: "Button",
        path: "/pages/component/basic/button/index",
      },
      {
        name: "Input",
        path: "/pages/component/basic/input/index",
      },
      {
        name: "Radio button",
        path: "/pages/component/basic/radio/index",
      },
      {
        name: "Checkbox",
        path: "/pages/component/basic/checkbox/index",
      },
      {
        name: "Switch",
        path: "/pages/component/basic/switch/index",
      },
      {
        name: "Picker",
        path: "/pages/component/basic/picker/index",
      },
      {
        name: "Picker View",
        path: "/pages/component/basic/picker-view/index",
      },
    ],
  },
  {
    name: "Medias",
    components: [
      {
        name: "Image",
        path: "/pages/component/basic/image/index",
      },
      {
        name: "Audio",
        path: "/pages/component/basic/audio/index",
      },
      {
        name: "Video",
        path: "/pages/component/basic/video/index",
      },
    ],
  },
];

const advancedComponents = [
  {
    name: "Foundation",
    components: [
      {
        name: "Typography",
        path: "/pages/component/basic/foundation/typography/index",
      },
      {
        name: "Icons",
        path: "/pages/component/basic/foundation/icons/index",
      },
      {
        name: "Border radius",
        path: "/pages/component/basic/foundation/border-radius/index",
      },
      {
        name: "Effects",
        path: "/pages/component/basic/foundation/effects/index",
      },
      {
        name: "Divider",
        path: "/pages/component/basic/foundation/divider/index",
      },
    ],
  },
  {
    name: "Actions",
    components: [
      {
        name: "Button",
        path: "/pages/component/advance/actions/button/index",
      },
      {
        name: "Button Bar",
        path: "/pages/component/advance/actions/button-bar/index",
      },
    ],
  },
  {
    name: "Advanced components",
    components: [
      {
        name: "Avatar",
        path: "/pages/component/advance/avatar/index",
      },
      {
        name: "Pagination",
        path: "/pages/component/advance/pagination/index",
      },
      {
        name: "Badge",
        path: "/pages/component/advance/badge/index",
      },
      {
        name: "Popup",
        path: "/pages/component/advance/popup/index",
      },
      {
        name: "Modal",
        path: "/pages/component/advance/modal/index",
      },
      {
        name: "List",
        path: "/pages/component/advance/list/index",
      },
      {
        name: "Stepper",
        path: "/pages/component/advance/stepper/index",
      },
      {
        name: "Tabs",
        path: "/pages/component/advance/tabs/index",
      },
      {
        name: "Sidebar",
        path: "/pages/component/advance/sidebar/index",
      },
    ],
  },
];

Page({
  data: {
    tabs: [{ title: "Basic components" }, { title: "Advanced components" }],
    activeTab: 1,
    basicComponents,
    advancedComponents,
  },
  onTabClick({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
  },
  onTabChange({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
  },
});
