const ADS_COUNT = 10;

const getRandomInt = (min, max) => {
  if (max < min) {
    throw 'getRandomInt Error: max value less then min value';
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomNumber = (min, max, fractionDigits) => {
  if (max < min) {
    throw 'getRandomNumber Error: max value less then min value';
  }
  const randomNumber = Math.random() * (max - min) + min;
  return +randomNumber.toFixed(fractionDigits);
};

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

const getArrayElement = (array) => (
  getRandomInt(0, array.length - 1)
);

const getAdvertisement = () => {
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

const adsList = Array.from({length: ADS_COUNT}, getAdvertisement);
adsList.join(); //DELETE


