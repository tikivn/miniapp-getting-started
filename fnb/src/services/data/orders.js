import { constants as c } from '../../constants';

export const orders = [
  {
    _id: '247-96028',
    price: 148000,
    shippingFee: 20000,
    promotion: 50000,
    total: 118000,
    date: '21/02/2022',
    pickupInfo: {
      time: {
        hour: '14',
        min: '30',
      },
      date: '21/02/2022',
    },
    time: '13:40',
    orderMethod: c.STORE_PICKUP,
    status: c.RECEIVED,
    products: [
      {
        name: 'Capuccino',
        number: 1,
        total: 69000,
        note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus rhoncus lorem risus sollicitudin.',
        image: '/assets/product_3.png',
        selectedAttributes: [],
      },
      {
        name: 'Latte',
        number: 1,
        total: 79000,
        note: '',
        image: '/assets/product_2.png',
        selectedAttributes: [],
      },
    ],
    store: {
      name: 'SB Han Thuyen',
      address: '13 Han Thuyen, D.1, HCM city',
      phone: '0908087290',
    },
    paymentMethod: {
      name: 'Momo',
      image: '/assets/payment.png',
    },
  },
  {
    _id: '247-96029',
    price: 69000,
    shippingFee: 15000,
    promotion: 0,
    total: 84000,
    date: '22/02/2022',
    time: '12:04',
    pickupInfo: {
      time: {
        hour: '10',
        min: '30',
      },
      date: '23/02/2022',
    },
    orderMethod: c.STORE_PICKUP,
    status: c.READY,
    products: [
      {
        name: 'Capuccino',
        number: 1,
        total: 69000,
        note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus rhoncus lorem risus sollicitudin.',
        image: '/assets/product_3.png',
        selectedAttributes: [
          {
            name: 'Size',
            values: ['Small'],
          },
        ],
      },
    ],
    store: {
      name: 'SB Han Thuyen',
      address: '13 Han Thuyen, D.1, HCM city',
      phone: '0908087290',
    },
    paymentMethod: {
      name: 'Momo',
      image: '/assets/payment.png',
    },
  },
  {
    _id: '247-96099',
    price: 79000,
    shippingFee: 15000,
    promotion: 50000,
    total: 44000,
    date: '22/02/2022',
    time: '12:04',
    pickupInfo: {
      time: {
        hour: '12',
        min: '30',
      },
      date: '22/02/2022',
    },
    orderMethod: c.STORE_PICKUP,
    status: c.COMPLETED,
    products: [
      {
        name: 'Latte',
        number: 1,
        total: 79000,
        note: '',
        image: '/assets/product_2.png',
        selectedAttributes: [
          {
            name: 'Size',
            values: ['Small'],
          },
        ],
      },
    ],
    store: {
      name: 'SB Han Thuyen',
      address: '13 Han Thuyen, D.1, HCM city',
      phone: '0908087290',
    },
    paymentMethod: {
      name: 'Momo',
      image: '/assets/payment.png',
    },
  },
];
