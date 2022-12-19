import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector(".gallery");

const createGallery = galleryItems
.map(({preview, original, description}) => 
{
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" 
    src="${preview}" 
    alt="${description}" />
  </a>`;
})
.join("");

galleryEl.insertAdjacentHTML("afterbegin", createGallery);

console.log(galleryItems);
