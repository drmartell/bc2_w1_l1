import { renderImage } from './render-image.js';
import htmlToDOM from '../util/html-to-DOM.js';
import images from '../data/images.js';

const parentUl = document.getElementsByTagName('ul')[0];

const renderCard = (imageObj) => {
    const imageHtml = renderImage(imageObj);
    const liElement = htmlToDOM(imageHtml);
    parentUl.appendChild(liElement);
};

images.forEach(image => renderCard(image));