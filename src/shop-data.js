import canonImg from './assets/images/camera/canon.jpg';
import oldBrandImg from './assets/images/camera/oldbrand.jpg';
import sonyImg from './assets/images/camera/sony.jpg';
import spartusImg from './assets/images/camera/spartus.jpg';

import cameraImg from './assets/images/camera.jpg';
import earphonesImg from './assets/images/earphones.jpg';
import laptopImg from './assets/images/laptop.jpg';
import phoneImg from './assets/images/phone.jpg';
import printerImg from './assets/images/printer.jpg';

export const banners = [
  {
    id: 1,
    title: 'camera',
    imageUrl: cameraImg,
    route: 'shop/camera',
  },
  {
    id: 2,
    title: 'earphones',
    imageUrl: earphonesImg,
    route: 'shop/earphones',
  },
  {
    id: 3,
    title: 'laptop',
    imageUrl: laptopImg,
    route: 'shop/laptop',
  },
  {
    id: 4,
    title: 'phone',
    imageUrl: phoneImg,
    route: 'shop/phone',
  },
  {
    id: 5,
    title: 'printer',
    imageUrl: printerImg,
    route: 'shop/printer',
  },
];

const SHOP_DATA = [
  {
    title: 'camera',
    items: [
      {
        id: 1,
        name: 'Canon',
        imageUrl: canonImg,
        price: 25,
      },
      {
        id: 2,
        name: 'Some old one',
        imageUrl: oldBrandImg,
        price: 18,
      },
      {
        id: 3,
        name: 'Spartus',
        imageUrl: spartusImg,
        price: 35,
      },
      {
        id: 4,
        name: 'Sony',
        imageUrl: sonyImg,
        price: 25,
      },
    ],
  },
  {
    title: 'earphones',
    items: [
      {
        id: 1,
        name: 'Canon',
        imageUrl: canonImg,
        price: 25,
      },
      {
        id: 2,
        name: 'Some old one',
        imageUrl: oldBrandImg,
        price: 18,
      },
      {
        id: 3,
        name: 'Spartus',
        imageUrl: spartusImg,
        price: 35,
      },
      {
        id: 4,
        name: 'Sony',
        imageUrl: sonyImg,
        price: 25,
      },
    ],
  },
  {
    title: 'laptop',
    items: [
      {
        id: 1,
        name: 'Canon',
        imageUrl: canonImg,
        price: 25,
      },
      {
        id: 2,
        name: 'Some old one',
        imageUrl: oldBrandImg,
        price: 18,
      },
      {
        id: 3,
        name: 'Spartus',
        imageUrl: spartusImg,
        price: 35,
      },
      {
        id: 4,
        name: 'Sony',
        imageUrl: sonyImg,
        price: 25,
      },
    ],
  },
  {
    title: 'phone',
    items: [
      {
        id: 1,
        name: 'Canon',
        imageUrl: canonImg,
        price: 25,
      },
      {
        id: 2,
        name: 'Some old one',
        imageUrl: oldBrandImg,
        price: 18,
      },
      {
        id: 3,
        name: 'Spartus',
        imageUrl: spartusImg,
        price: 35,
      },
      {
        id: 4,
        name: 'Sony',
        imageUrl: sonyImg,
        price: 25,
      },
    ],
  },
  {
    title: 'printer',
    items: [
      {
        id: 1,
        name: 'Canon',
        imageUrl: canonImg,
        price: 25,
      },
      {
        id: 2,
        name: 'Some old one',
        imageUrl: oldBrandImg,
        price: 18,
      },
      {
        id: 3,
        name: 'Spartus',
        imageUrl: spartusImg,
        price: 35,
      },
      {
        id: 4,
        name: 'Sony',
        imageUrl: sonyImg,
        price: 25,
      },
    ],
  },
];

export default SHOP_DATA;
