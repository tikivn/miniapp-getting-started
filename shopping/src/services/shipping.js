import { post } from "./api";

const API_URL = "https://miniapp-demo.tala.xyz";

const origin = {
  street: "285 CMT8",
  province_name: "Hồ Chí Minh",
  district_name: "Quận 10",
  ward_name: "Phường 12",
  ward_code: "VN039007012",
  contact: {
    first_name: "TiniApp",
    last_name: "Shopping",
    phone: "0987654321",
  },
  // coordinates: {
  //   latitude: 10.779693436530149,
  //   longitude: 106.67971686137946,
  // },
};

export const getQuotes = async (address, items) => {
  const data = {
    origin,
    destination: {
      street: address.street,
      province_name: address.city.name,
      district_name: address.district.name,
      ward_name: address.ward.name,
      ward_code: address.ward.tiki_code,
      contact: {
        first_name: address.name,
        phone: address.phone,
      },
      // coordinates: {
      //   latitude: 10.8013905611673,
      //   longitude: 106.61454563971664,
      // },
    },
    items: items.map((item) => {
      return {
        name: item.name,
        // description: item.name,
        quantity: item.total,
        price: item.price,
        weight: 1,
        dimension: {
          height: Math.floor(Math.random() * 6) + 1,
          width: Math.floor(Math.random() * 6) + 1,
          depth: Math.floor(Math.random() * 6) + 1,
        },
      };
    }),
  };

  const res = await post(`${API_URL}/shipping/quotes`, { data });
  return res.data;
};
