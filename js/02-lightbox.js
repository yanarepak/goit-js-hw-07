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

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

console.log(galleryItems);
