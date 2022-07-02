import {getCard} from './cards-generator.js';
import {getAdvertisement} from './ad-generator.js';
import {changePageMode} from './form-handler.js'; // DELETE

changePageMode(false); // DELETE
changePageMode(true); // DELETE

const similarCards = getAdvertisement(7);
getCard(similarCards[6]);

