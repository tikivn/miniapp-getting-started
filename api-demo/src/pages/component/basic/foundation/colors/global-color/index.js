import queryString from 'query-string';

Page({
  data: {
    color:undefined,
    tokens: {
      "Grayscale": [
        {
          name: "color-global-white",
          hex: "#FFFFFF",
          rgb: "rgb(255, 255, 255)",
          opacity: 1
        },
        {
          name: "color-global-gray10",
          hex: "#F5F5FA",
          rgb: "rgb(245, 245, 250)",
          opacity: 1
        },
        {
          name: "color-global-gray20",
          hex: "#EBEBF0",
          rgb: "rgb(235, 235, 240)",
          opacity: 1
        },
        {
          name: "color-global-gray30",
          hex: "#DDDDE3",
          rgb: "rgb(221, 221, 227)",
          opacity: 1
        },
        {
          name: "color-global-gray40",
          hex: "#C4C4CF",
          rgb: "rgb(196, 196, 207)",
          opacity: 1
        },
        {
          name: "color-global-gray50",
          hex: "#A6A6B0",
          rgb: "rgb(166, 166, 176)",
          opacity: 1
        },
        {
          name: "color-global-gray60",
          hex: "#808089",
          rgb: "rgb(128, 128, 137)",
          opacity: 1
        },
        {
          name: "color-global-gray70",
          hex: "#64646D",
          rgb: "rgb(100, 100, 109)",
          opacity: 1
        },
        {
          name: "color-global-gray80",
          hex: "#515158",
          rgb: "rgb(81, 81, 88)",
          opacity: 1
        },
        {
          name: "color-global-gray90",
          hex: "#38383D",
          rgb: "rgb(56, 56, 61)",
          opacity: 1
        },
        {
          name: "color-global-gray100",
          hex: "#27272A",
          rgb: "rgb(39, 39, 42)",
          opacity: 1
        },
        {
          name: "color-global-black",
          hex: "#000000",
          rgb: "rgb(0, 0, 0)",
          opacity: 1
        }
      ],
      "Blue": [
        {
          name: "color-global-blue10",
          hex: "#F0F8FF",
          rgb: "rgb(240, 248, 255)",
          opacity: 1
        },
        {
          name: "color-global-blue20",
          hex: "#DBEEFF",
          rgb: "rgb(219, 238, 255)",
          opacity: 1
        },
        {
          name: "color-global-blue30",
          hex: "#C2E1FF",
          rgb: "rgb(194, 225, 255)",
          opacity: 1
        },
        {
          name: "color-global-blue40",
          hex: "#94CDFF",
          rgb: "rgb(148, 205, 255)",
          opacity: 1
        },
        {
          name: "color-global-blue50",
          hex: "#5CB3FF",
          rgb: "rgb(92, 179, 255)",
          opacity: 1
        },
        {
          name: "color-global-blue60",
          hex: "#1A94FF",
          rgb: "rgb(26, 148, 255)",
          opacity: 1
        },
        {
          name: "color-global-blue70",
          hex: "#FOB74E5",
          rgb: "rgb(11, 116, 229)",
          opacity: 1
        },
        {
          name: "color-global-blue80",
          hex: "#0D5BB5",
          rgb: "rgb(13, 91, 181)",
          opacity: 1
        },
        {
          name: "color-global-blue90",
          hex: "#074183",
          rgb: "rgb(7, 65, 131)",
          opacity: 1
        },
        {
          name: "color-global-blue100",
          hex: "#052E5C",
          rgb: "rgb(5, 46, 92)",
          opacity: 1
        },
      ],
      "Green": [
        {
          name: "color-global-green10",
          hex: "#EFFFF4",
          rgb: "rgb(239, 255, 244)",
          opacity: 1
        },
        {
          name: "color-global-green20",
          hex: "#D7FAE0",
          rgb: "rgb(215, 250, 224)",
          opacity: 1
        },
        {
          name: "color-global-green30",
          hex: "#B7EFC3",
          rgb: "rgb(183, 239, 195)",
          opacity: 1
        },
        {
          name: "color-global-green40",
          hex: "#78DA90",
          rgb: "rgb(120, 218, 144)",
          opacity: 1
        },
        {
          name: "color-global-green50",
          hex: "#2DC26S",
          rgb: "rgb(45, 194, 109)",
          opacity: 1
        },
        {
          name: "color-global-green60",
          hex: "#00AB56",
          rgb: "rgb(0, 171, 86)",
          opacity: 1
        },
        {
          name: "color-global-green70",
          hex: "#079449",
          rgb: "rgb(7, 148, 73)",
          opacity: 1
        },
        {
          name: "color-global-green80",
          hex: "#007D3A",
          rgb: "rgb(0, 125, 58)",
          opacity: 1
        },
        {
          name: "color-global-green90",
          hex: "#E04592C",
          rgb: "rgb(4, 89, 44)",
          opacity: 1
        },
        {
          name: "color-global-green100",
          hex: "#03401F",
          rgb: "rgb(3, 64, 31)",
          opacity: 1
        },
      ],
      "Yellow": [
        {
          name: "color-global-yellow10",
          hex: "#FFFCED",
          rgb: "rgb(255, 252, 237)",
          opacity: 1
        },
        {
          name: "color-global-yellow20",
          hex: "#FFF5C7",
          rgb: "rgb(255, 245, 199)",
          opacity: 1
        },
        {
          name: "color-global-yellow30",
          hex: "#FFE880",
          rgb: "rgb(255, 232, 128)",
          opacity: 1
        },
        {
          name: "color-global-yellow40",
          hex: "#FFD530",
          rgb: "rgb(255, 213, 48)",
          opacity: 1
        },
        {
          name: "color-global-yellow50",
          hex: "#FFC400",
          rgb: "rgb(255, 196, 0)",
          opacity: 1
        },
        {
          name: "color-global-yellow60",
          hex: "#FFB700",
          rgb: "rgb(255, 183, 0)",
          opacity: 1
        },
        {
          name: "color-global-yellow70",
          hex: "#E59900",
          rgb: "rgb(229, 153, 0)",
          opacity: 1
        },
        {
          name: "color-global-yellow80",
          hex: "#CC8100",
          rgb: "rgb(204, 129, 0)",
          opacity: 1
        },
        {
          name: "color-global-yellow90",
          hex: "#B26500",
          rgb: "rgb(178, 101, 0)",
          opacity: 1
        },
        {
          name: "color-global-yellow100",
          hex: "#995200",
          rgb: "rgb(153, 82, 0)",
          opacity: 1
        },
      ],
      "Orange": [
        {
          name: "color-global-orange10",
          hex: "#FFF5EB",
          rgb: "rgb(255, 245, 235)",
          opacity: 1
        },
        {
          name: "color-global-orange20",
          hex: "#FFE2C6",
          rgb: "rgb(255, 226, 198)",
          opacity: 1
        },
        {
          name: "color-global-orange30",
          hex: "#FFD1A4",
          rgb: "rgb(255, 209, 164)",
          opacity: 1
        },
        {
          name: "color-global-orange40",
          hex: "#FFB56C",
          rgb: "rgb(255, 181, 108)",
          opacity: 1
        },
        {
          name: "color-global-orange50",
          hex: "#FF9F41",
          rgb: "rgb(255, 159, 65)",
          opacity: 1
        },
        {
          name: "color-global-orange60",
          hex: "#FC820A",
          rgb: "rgb(252, 130, 10)",
          opacity: 1
        },
        {
          name: "color-global-orange70",
          hex: "#E36301",
          rgb: "rgb(227, 130, 10)",
          opacity: 1
        },
        {
          name: "color-global-orange80",
          hex: "#B64F00",
          rgb: "rgb(182, 79, 0)",
          opacity: 1
        },
        {
          name: "color-global-orange90",
          hex: "#903F00",
          rgb: "rgb(144, 63, 0)",
          opacity: 1
        },
        {
          name: "color-global-orange100",
          hex: "#6C2F00",
          rgb: "rgb(255, 245, 235)",
          opacity: 1
        },
      ],
      "Red": [
        {
          name: "color-global-red10",
          hex: "#FFF0F1",
          rgb: "rgb(255, 240, 241)",
          opacity: 1
        },
        {
          name: "color-global-red20",
          hex: "#FFDBDE",
          rgb: "rgb(255, 219, 222)",
          opacity: 1
        },
        {
          name: "color-global-red30",
          hex: "#FFB8BC",
          rgb: "rgb(255, 184, 188)",
          opacity: 1
        },
        {
          name: "color-global-red40",
          hex: "#FF99A0",
          rgb: "rgb(255, 153, 160)",
          opacity: 1
        },
        {
          name: "color-global-red50",
          hex: "#FF707A",
          rgb: "rgb(255, 112, 122)",
          opacity: 1
        },
        {
          name: "color-global-red60",
          hex: "#FF424E",
          rgb: "rgb(255, 66, 78)",
          opacity: 1
        },
        {
          name: "color-global-red70",
          hex: "#D93843",
          rgb: "rgb(217, 56, 67)",
          opacity: 1
        },
        {
          name: "color-global-red80",
          hex: "#BF1D28",
          rgb: "rgb(191, 29, 40)",
          opacity: 1
        },
        {
          name: "color-global-red90",
          hex: "#910F17",
          rgb: "rgb(145, 15, 23)",
          opacity: 1
        },
        {
          name: "color-global-red100",
          hex: "#6E0B12",
          rgb: "rgb(110, 11, 18)",
          opacity: 1
        },
      ],
      "Purple": [
        {
          name: "color-global-purple10",
          hex: "#F5F1FD",
          rgb: "rgb(245, 241, 253)",
          opacity: 1
        },
        {
          name: "color-global-purple20",
          hex: "#E9E1FD",
          rgb: "rgb(233, 225, 253)",
          opacity: 1
        },
        {
          name: "color-global-purple30",
          hex: "#DED0FE",
          rgb: "rgb(222, 208, 254)",
          opacity: 1
        },
        {
          name: "color-global-purple40",
          hex: "#BFA4FE",
          rgb: "rgb(191, 164, 254)",
          opacity: 1
        },
        {
          name: "color-global-purple50",
          hex: "#A079FC",
          rgb: "rgb(160, 121, 252)",
          opacity: 1
        },
        {
          name: "color-global-purple60",
          hex: "#8352FA",
          rgb: "rgb(131, 82, 250)",
          opacity: 1
        },
        {
          name: "color-global-purple70",
          hex: "#733DF2",
          rgb: "rgb(115, 61, 242)",
          opacity: 1
        },
        {
          name: "color-global-purple80",
          hex: "#6028E0",
          rgb: "rgb(96, 40, 224)",
          opacity: 1
        },
        {
          name: "color-global-purple90",
          hex: "#4617B2",
          rgb: "rgb(70, 23, 178)",
          opacity: 1
        },
        {
          name: "color-global-purple100",
          hex: "#371585",
          rgb: "rgb(55, 21, 133)",
          opacity: 1
        },
      ]
    }
  },
	onLoad(query) {
    console.log(query)
    const params = queryString.parse(query)
    my.setNavigationBar({
      title:params.color,
      reset:true
    })
    this.setData({
      color:params.color
    })
	},
	onReady() {
	},
	onShow() {
	},
	onHide() {
	},
	onUnload() {
	}
});