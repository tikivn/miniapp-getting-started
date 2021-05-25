const basicComponents = [
  {
    name: 'Theme',
    components: [
      {
        name: 'Typography',
        path: ''
      },
      {
        name: 'Iconography',
        path: ''
      },
      {
        name: 'Border radius',
        path: ''
      },
      {
        name: 'Evelation',
        path: ''
      },
    ]
  },
  {
    name: 'View container',
    components: [
      {
        name: 'View',
        path: '',
      },
      {
        name: 'Movable View',
        path: 'pages/component/basic/movable-view/index',
      },
      {
        name: 'Carousel',
        path: '/pages/component/basic/carousel/index',
      },
      {
        name: 'Scroll View',
        path: '/pages/component/basic/scroll-view/index',
      },
      {
        name: 'Tabs',
        path: '/pages/component/basic/tabs/index',
      },
    ]
  },
  {
    name: 'Basic content',
    components: [
      {
        name: 'Text',
        path: "/pages/component/basic/text/index",
      },
      {
        name: 'Icon',
        path: "/pages/component/basic/icon/index",
      },
      {
        name: 'Progress',
        path: "/pages/component/basic/progress/index",
      },
    ]
  },
  {
    name: 'Form component',
    components: [
      {
        name: 'Button',
        path: "/pages/component/basic/button/index",
      },
      {
        name: 'Input',
        path: "/pages/component/basic/input/index",
      },
      {
        name: 'Radio button',
        path: "/pages/component/basic/radio/index",
      },
      {
        name: 'Checkbox',
        path: "/pages/component/basic/checkbox/index",
      },
      {
        name: 'Switch',
        path: "/pages/component/basic/switch/index",
      },
    ]
  },
  {
    name: 'Medias',
    components: [
      {
        name: 'Image',
        path: "/pages/component/basic/image/index",
      }
    ]
  }
  // {
  //   name: 'General',
  //   components: [
  //     {
  //       name: 'Button',
  //       path: '/pages/component/basic/button/index',
  //     },
  //     {
  //       name: 'Divider',
  //       path: ''
  //     },
  //     {
  //       name: 'List',
  //       path: '/pages/component/basic/list/index',
  //     },
  //     {
  //       name: 'Badge',
  //       path: ''
  //     },
  //     {
  //       name: 'Tooltip',
  //       path: ''
  //     },
  //     {
  //       name: 'Steps',
  //       path: ''
  //     },
  //     {
  //       name: 'Pagination',
  //       path: ''
  //     },
  //     {
  //       name: 'Slider',
  //       path: ''
  //     },
  //     {
  //       name: 'Input steppers',
  //       path: ''
  //     },
  //     {
  //       name: 'Date pickers',
  //       path: ''
  //     },
  //   ]
  // },
  // {
  //   name: 'Text input',
  //   components: [
  //     {
  //       name: 'Text field',
  //       path: ''
  //     },
  //     {
  //       name: 'Textarea',
  //       path: ''
  //     }
  //   ]
  // },
  // {
  //   name: 'Selection',
  //   components: [
  //     {
  //       name: 'Radio button',
  //       path: ''
  //     },
  //     {
  //       name: 'Checkbox',
  //       path: ''
  //     },
  //     {
  //       name: 'Switch',
  //       path: ''
  //     }
  //   ]
  // },
  // {
  //   name: 'Bar',
  //   components: [
  //     {
  //       name: 'Alphabet bar',
  //       path: ''
  //     },
  //     {
  //       name: 'Progress bar',
  //       path: ''
  //     },
  //     {
  //       name: 'Navigation bar',
  //       path: ''
  //     },
  //     {
  //       name: 'Button bar',
  //       path: ''
  //     },
  //     {
  //       name: 'Snack bar',
  //       path: ''
  //     },
  //   ]
  // }
]

const advancedComponents = [
  {
    name: 'Advanced components',
    components: [
      {
        name: "Avatar",
        path: "/pages/component/advance/avatar/index",
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
    ]
  }
]

Page({
  data: {
    tabs: [{title: 'Basic components'}, {title: 'Advanced components'}],
    basicComponents,
    advancedComponents,
  },
});
