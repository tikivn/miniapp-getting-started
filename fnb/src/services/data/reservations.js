import { constants as c } from "../../constants";

export const reservations = [
  {
    _id: "1",
    status: c.RESERVED,
    date: "19/03/2022",
    time: "13:00",
    numberOfAdults: 2,

    contact: {
      name: "Nick",
      phone: "06969696969",
      email: "nick69@gmail.com",
    },
    notes: {
      seats: [
        {
          title: "Elderly people",
          value: 1,
        },
        {
          title: "Children",
          value: 1,
        },
      ],
      sittingArea: "Any",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet leo.",
    },

    store: {
      _id: "615ffd94709066373c2ac090",
      favorite: true,
      open: "07:00",
      close: "22:00",
      phone: "0909090909",
      name: "SB Van Hanh Mall",
      address: "11 Su Van Hanh, D.10, HCM city",
      images: [
        "https://i.ibb.co/Ldv273n/store-info.png",
        "https://i.ibb.co/Ldv273n/store-info.png",
      ],
    },
  },
  {
    _id: "2",
    status: c.PAST,
    date: "15/03/2022",
    time: "13:00",
    numberOfAdults: 4,
    contact: {
      name: "Nick",
      phone: "06969696969",
      email: "nick69@gmail.com",
    },
    notes: {
      seats: [
        {
          title: "Elderly people",
          value: 0,
        },
        {
          title: "Children",
          value: 1,
        },
      ],
      sittingArea: "Any",
    },
    store: {
      _id: "615ffd94709066373c2aa090",
      favorite: true,
      open: "07:00",
      close: "22:00",
      phone: "0909090909",
      name: "SB CMT8",
      address: "24 bis Cach Mang Thang 8, D.3,...",
      images: [
        "https://i.ibb.co/Ldv273n/store-info.png",
        "https://i.ibb.co/Ldv273n/store-info.png",
      ],
    },
  },
  {
    _id: "3",
    status: c.CANCELED,
    date: "18/03/2022",
    time: "13:00",
    numberOfAdults: 3,
    contact: {
      name: "Nick",
      phone: "06969696969",
      email: "nick69@gmail.com",
    },
    notes: {
      seats: [
        {
          title: "Elderly people",
          value: 0,
        },
        {
          title: "Children",
          value: 0,
        },
      ],
      sittingArea: "Any",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet leo.",
    },
    store: {
      _id: "615ffd94709066373c2ad090",
      favorite: true,
      open: "07:00",
      close: "22:00",
      phone: "0909090909",
      name: "SB Han Thuyen",
      address: "11-13 Han Thuyen, D.1, HCM city",
      images: [
        "https://i.ibb.co/Ldv273n/store-info.png",
        "https://i.ibb.co/Ldv273n/store-info.png",
      ],
    },
  },
  {
    _id: "4",
    status: c.RESERVED,
    date: "19/03/2022",
    time: "18:00",
    numberOfAdults: 5,

    contact: {
      name: "Nick",
      phone: "06969696969",
      email: "nick69@gmail.com",
    },
    notes: {
      seats: [
        {
          title: "Elderly people",
          value: 1,
        },
        {
          title: "Children",
          value: 1,
        },
      ],
      sittingArea: "Any",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet leo.",
    },
    store: {
      _id: "615ffd94709066373c2ae090",
      favorite: false,
      open: "07:00",
      close: "22:00",
      phone: "0909090909",
      name: "SB Leman",
      address: "117 Nguyen Dinh Chieu, D.3, HC...",
      images: [
        "https://i.ibb.co/Ldv273n/store-info.png",
        "https://i.ibb.co/Ldv273n/store-info.png",
      ],
    },
  },
  {
    _id: "5",
    status: c.RESERVED,
    date: "20/03/2022",
    time: "19:00",
    numberOfAdults: 2,
    contact: {
      name: "Nick",
      phone: "06969696969",
      email: "nick69@gmail.com",
    },
    notes: {
      seats: [
        {
          title: "Elderly people",
          value: 0,
        },
        {
          title: "Children",
          value: 0,
        },
      ],
      sittingArea: "Inside",
      detail: "",
    },
    store: {
      _id: "615ffd94709066373c2fb090",
      favorite: false,
      open: "07:00",
      close: "22:00",
      phone: "0909090909",
      name: "SB Ibis",
      address: "2 Hong Ha st, D.Tan Binh, HCM...",
      images: [
        "https://i.ibb.co/Ldv273n/store-info.png",
        "https://i.ibb.co/Ldv273n/store-info.png",
      ],
    },
  },
];
