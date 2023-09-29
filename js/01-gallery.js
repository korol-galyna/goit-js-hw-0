import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);


const galleryList = document.querySelector(".gallery");
galleryList.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

function createMarkup (arr){
return arr
.map(
({preview,original,description}) => 

`<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`
)
    .join("");
}


galleryList.addEventListener("click", handleGalleryClick);

function handleGalleryClick(event) {
    event.preventDefault(); 

    const target = event.target;
    if (target.nodeName !== "IMG") {
        return;
    }
    
    const largeImageURL = target.dataset.source;
    openModalWithImage(largeImageURL);
  }
  
  function openModalWithImage(imageURL) {
    
    const instance = basicLightbox.create(`
      <img src="${imageURL}" alt="Image" />
    `);
  
    instance.show();
  }

  