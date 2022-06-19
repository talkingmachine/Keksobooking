import {getRandomNumber, getRandomInt, getArrayElement} from './utils.js';

const ADS_COUNT = 10;
let advtImageNumber = 0;

const TYPE_OPTIONS = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];
const TIME_OPTIONS = [
  '12:00',
  '13:00',
  '14:00'
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const generateAdvertisement = () => {
  advtImageNumber += 1;
  const author = {
    avatar: `img/avatars/user${(`0${advtImageNumber}`).slice(-2)}.png`
  };
  const location = {
    lat: getRandomNumber(35.65000, 35.70000, 5),
    lng: getRandomNumber(139.70000, 139.80000, 5)
  };
  const offer = {
    title: 'THE TITLE',
    address: `${location.lat}, ${location.lng}`,
    price: getRandomInt(10, 1000),
    type: TYPE_OPTIONS[getArrayElement(TYPE_OPTIONS)],
    rooms: getRandomInt(1, 10),
    quests: getRandomInt(1, 40),
    checkin: TIME_OPTIONS[getArrayElement(TIME_OPTIONS)],
    checkout: TIME_OPTIONS[getArrayElement(TIME_OPTIONS)],
    features: FEATURES.slice(getArrayElement(FEATURES)),
    description: 'THE DESCRIPTION',
    photos: PHOTOS.slice(getArrayElement(PHOTOS)),
  };
  return {
    author,
    offer,
    location
  };
};

const getAdvertisement = () => (
  Array.from({length: ADS_COUNT}, generateAdvertisement)
);

export {getAdvertisement};
