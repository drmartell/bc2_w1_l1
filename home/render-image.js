export function renderImage(image) {
    const html = /*html*/`
    <li>
        <div class="image-div">
            <img class="card-img" src="${image.url}" alt="${image.title} image">
        </div>
        <div class="info-div">
            <h2 title="${image.description}">${image.title}</h2>
            <p class="horns-p">${image.horns}</p>
        </div>
    </li>
    `;

    return html;
}
