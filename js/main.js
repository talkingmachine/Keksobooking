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


console.log(getRandomInt(1, 1)); //DELETE
console.log(getRandomNumber(1, 1, 3)); //DELETE


