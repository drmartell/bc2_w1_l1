import { renderImage } from './render-image.js';
import htmlToDOM from '../util/html-to-DOM.js';
import images from '../data/images.js';

const parentUl = document.getElementsByTagName('ul')[0];
const keywordFilterSelect = document.querySelector('#keyword');
const hornsFilterSelect = document.querySelector('#horns');

const renderCard = (imageObj) => {
    const imageHtml = renderImage(imageObj);
    const liElement = htmlToDOM(imageHtml);
    parentUl.appendChild(liElement);
};

const renderFiltered = () => {
    const keywordFilter = keywordFilterSelect.value;
    const hornsFilter = hornsFilterSelect.value;
    console.log(keywordFilter);

    let filtered = null;

    if (!keywordFilter && !hornsFilter) {
        filtered = images;
    }
    else {
        filtered = images.filter(image => {
            // console.log(image);
            image.keyword === keywordFilter &&
            image.horns === hornsFilter;
        });
        console.log(filtered);
    }

    filtered.forEach(image => renderCard(image));
};

keywordFilterSelect.addEventListener('change', renderFiltered);
hornsFilterSelect.addEventListener('change', renderFiltered);

renderFiltered();