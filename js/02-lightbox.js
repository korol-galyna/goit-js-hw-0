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
   alt="${description}" 

   data-source="${original}"
   />
   <div hidden class="gallery_caption">${description}</div>
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
    const lightbox = new SimpleLightbox(".gallery a", {
        captionsData: "alt",   
    });

    setTimeout(() => {
        lightbox.open();
      }, 250);
  }

  