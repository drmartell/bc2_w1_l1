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
    parentUl.innerHTML = '';
    const keywordFilter = keywordFilterSelect.value.toLowerCase();
    const hornsFilter = Number(hornsFilterSelect.value);

    let filtered = null;

    if (!keywordFilter && !hornsFilter) {
        filtered = images;
    }
    else {
        filtered = images.filter(image => (keywordFilter ? image.keyword === keywordFilter : true) &&
            (hornsFilter > 0 ? image.horns >= hornsFilter : true));
    }
    console.log(filtered);
    filtered.forEach(image => renderCard(image));
};

keywordFilterSelect.addEventListener('change', renderFiltered);
hornsFilterSelect.addEventListener('change', renderFiltered);

renderFiltered();