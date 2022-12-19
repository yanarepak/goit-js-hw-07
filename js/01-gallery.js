import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector(".gallery");


const createGallery =  galleryItems
.map(({preview, original, description}) => 
{
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
})
.join("");

galleryEl.insertAdjacentHTML("afterbegin", createGallery);

const openImg = event => {
    event.preventDefault();
    if(event.target.nodeName !== "IMG"){
        return
    }
    
    const instance = basicLightbox.create(`
<img scr =${event.target.dataset.source} width="800" height="600">`);
    instance.show();

    galleryEl.addEventListener("keydown", event => {
      if(event.code === "Escape"){
      instance.close();
    }
    });
}

galleryEl.addEventListener("click", openImg);
console.log(galleryItems);


