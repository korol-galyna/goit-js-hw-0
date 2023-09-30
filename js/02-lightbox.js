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

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captions: true, 
    captionDelay: 250, 
   }); 