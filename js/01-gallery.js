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

    let bigImg = event.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src=${bigImg} alt="image"/>`,
      {
        onShow: () => document.addEventListener("keydown", closeImg),
        onClose: () => {
          document.removeEventListener("keydown", closeImg)
      console.log(!instance.visible())
      }
      });

    instance.show();

  function closeImg(event){
    if(event.code === "Escape"){
      instance.close()
    }
  }

}
galleryEl.addEventListener("click", openImg);




