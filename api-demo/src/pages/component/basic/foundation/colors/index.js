Page({
  data: {
    global: {
      tokens: [
        "Grayscale",
          "Blue",
          "Green",
          "Yellow",
          "Orange",
          "Red",
          "Purple"
      ]
    },
    alias: [
      {
        title: "Brand",
        tokens: [
          {
            name: "color-alias-brand",
            color: "color-global-blue60",
            hex: "#1A94FF",
            opacity: 1
          },
          {
            name: "color-alias-on-brand",
            color: "color-global-white",
            hex: "#FFFFFF",
            opacity: 1
          }
        ]
      },
      {
        title: "Positive",
        tokens: [
          {
            name: "color-alias-positive",
            color: "color-global-green60",
            hex: "#00AB56",
            opacity: 1
          },
          {
            name: "color-alias-on-positive",
            color: "color-global-white",
            hex: "#FFFFFF",
            opacity: 1
          }
        ]
      },
      {
        title: "Negative",
        tokens: [
          {
            name: "color-alias-negative",
            color: "color-global-red60",
            hex: "#FF424E",
            opacity: 1
          },
          {
            name: "color-alias-on-negative",
            color: "color-global-white",
            hex: "FFFFFF",
            opacity: 1
          }
        ]
      },
      {
        title: "Reverse theme",
        tokens: [
          {
            name: "color-alias-reverse-theme",
            color: "color-global-gray100",
            hex: "#27272A",
            opacity: 1
          },
          {
            name: "color-alias-primary-on-reverse-theme",
            color: "color-global-white",
            hex: "#FFFFFF",
            opacity: 1
          },
          {
            name: "color-alias-secondary-on-reverse-theme",
            color: "color-global-gray50",
            hex: "#A6A6B0",
            opacity: 1
          }
        ]
      },
      {
        title: "Disabled",
        tokens: [
          {
            name: "color-alias-disabled",
            color: "color-global-black",
            hex: "#000000",
            opacity: 0.15
          },
          {
            name: "color-alias-disabled-variant",
            color: "color-global-black",
            hex: "#000000",
            opacity: 0.05
          },
          {
            name: "color-alias-reverse-disabled",
            color: "color-global-white",
            hex: "#FFFFFF",
            opacity: 0.15
          },
          {
            name: "color-alias-reverse-disabled-variant",
            color: "color-global-white",
            hex: "#FFFFFF",
            opacity: 0.05
          }
        ]
      },
      {
        title: "Outline",
        tokens: [
          {
            name: "color-alias-outline",
            color: "color-global-gray30",
            hex: "#DDDDE3",
            opacity: 1
          },
          {
            name: "color-alias-outline-variant",
            color: "color-global-gray20",
            hex: "#EBEBF0",
            opacity: 1
          },
          {
            name: "color-alias-outline-overlay",
            color: "color-global-black",
            hex: "#000000",
            opacity: 0.05
          }
        ]
      },
      {
        title: "Skeleton",
        tokens: [
          {
            name: "color-alias-skeleton",
            color: "color-global-black",
            hex: "#000000",
            opacity: 0.05
          }
        ]
      },
      {
        title: "Hyperlink",
        tokens: [
          {
            name: "color-alias-hyperlink",
            color: "color-global-blue60",
            hex: "#1A94FF",
            opacity: 1
          }
        ]
      },
      {
        title: "Theme",
        tokens: [
          {
            name: "color-alias-theme",
            color: "color-global-white",
            hex: "#FFFFFF",
            opacity: 1
          }, 
          {
            name: "color-alias-theme-variant",
            color: "color-global-gray10",
            hex: "#F5F5FA",
            opacity: 1
          },
          {
            name: "color-alias-primary-on-theme",
            color: "color-global-gray100",
            hex: "#27272A",
            opacity: 1
          },
          {
            name: "color-alias-secondary-on-theme",
            color: "color-global-gray60",
            hex: "#808089",
            opacity: 1
          }
        ]
      }
    ]
  },
  changeTitle(e) {
    const color = e.target.dataset.color;
    my.navigateTo({
      url: "pages/component/basic/foundation/colors/global-color/index?color=" + color
    })
  }
});
