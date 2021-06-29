const basicComponents = [
  {
    name: "Theme",
    components: [
      {
        name: "Typography",
        path: "",
      },
      {
        name: "Iconography",
        path: "",
      },
      {
        name: "Border radius",
        path: "",
      },
      {
        name: "Evelation",
        path: "",
      },
    ],
  },
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
        name: "Textarea",
        path: "/pages/component/basic/textarea/index",
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
      {
        name: "Slider",
        path: "/pages/component/basic/slider/index",
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
        name: "Colors",
        path: "/pages/component/basic/foundation/colors/index",
      },
      {
        name: "Space",
        path: "/pages/component/basic/foundation/space/index",
      },
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
    name: "Forms",
    components: [
      {
        name: "Input",
        path: "/pages/component/advance/form/input/index",
      },
      {
        name: "Text field",
        path: "/pages/component/advance/form/text-field/index",
      },
      {
        name: "Text area",
        path: "/pages/component/advance/form/text-area/index",
      },
      {
        name: "Stepper",
        path: "/pages/component/advance/form/stepper/index",
      },
      {
        name: "Radio button",
        path: "/pages/component/advance/form/radio-button/index",
      },
      {
        name: "Checkbox",
        path: "/pages/component/advance/form/checkbox/index",
      },
      {
        name: "Switch",
        path: "/pages/component/advance/form/switch/index",
      },
      {
        name: "Date picker",
        path: "/pages/component/advance/form/date-picker/index",
      },
      {
        name: "Slider",
        path: "/pages/component/advance/form/slider/index",
      },
    ],
  },
  {
    name: "Advanced components",
    components: [
      {
        name: "Popup",
        path: "/pages/component/advance/popup/index",
      },
      {
        name: "Modal",
        path: "/pages/component/advance/modal/index",
      },
    ],
  },
  {
    name: "Navigation",
    components: [
      {
        name: "Avatar",
        path: "/pages/component/advance/navigation/avatar/index",
      },
      {
        name: "Badge",
        path: "/pages/component/advance/navigation/badge/index",
      },
      {
        name: "Sidebar",
        path: "/pages/component/advance/navigation/sidebar/index",
      },
      {
        name: "Tabs",
        path: "/pages/component/advance/navigation/tabs/index",
      },
      {
        name: "Pagination",
        path: "/pages/component/advance/navigation/pagination/index",
      },
    ],
  },
  {
    name: "Data visualization",
    components: [
      {
        name: "List",
        path: "/pages/component/advance/data-visualization/list/index",
      },
    ],
  },
  {
    name: "Feedback",
    components: [
      {
        name: "Bottom sheet",
        path: "/pages/component/advance/feedback/bottom-sheet/index",
      },
    ],
  },
  {
    name: "Page template",
    components: [
      {
        name: "Cart detail",
        path: "/pages/component/template/cart-detail/index",
      },
    ],
  },
];

Page({
  data: {
    tabs: [{ title: "Basic components" }, { title: "Advanced components" }],
    activeTab: 0,
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
