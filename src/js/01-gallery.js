// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');

const galleryEl = galleryItems.map(function ({ preview, original, description }) {
  return `<li 
  class="gallery__item">
  <a class="gallery__link" href="${original}" target="_blank">
   <img class= "gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
   >
  </a>
  </li>`
}).join("");

gallery.insertAdjacentHTML('beforeend', galleryEl);

new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt' });

console.log(galleryItems);
