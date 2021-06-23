import imageArray from "./gallary-items.js";

const galleryPlace = document.querySelector('.js-gallery');
const modalWindow = document.querySelector('.lightbox');
const modalWindowPicture = document.querySelector('.lightbox__image');
const modalWindowOverlay = document.querySelector('.lightbox__overlay');
const modalWindowClose = document.querySelector('button[data-action="close-lightbox"]');

let pictureNumber = 0;

const galleryMarkup = createGalleryMarkup(imageArray);

galleryPlace.insertAdjacentHTML('beforeend', galleryMarkup);

galleryPlace.addEventListener('click', onGalleryPictureClick);
modalWindowClose.addEventListener('click', ModalWindowClose);
modalWindowOverlay.addEventListener('click', ModalWindowClose);

document.addEventListener('keyup', function(evt) {
    if (evt.key === 'Escape') ModalWindowClose()});

document.addEventListener('keyup', PictureChange);

function createGalleryMarkup (images){
return images.map(({preview, original, description}) => {
return `
    <li class="gallery__item">
        <a
          class="gallery__link"
        >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
    </li>
    `;
}).join('');
}

function onGalleryPictureClick(evt){
    const isGalleryEl = evt.target.classList.contains('gallery__image');
    if (!isGalleryEl){
        return;
    }
    modalWindow.classList.add('is-open');
    modalWindowPicture.setAttribute('src', `${evt.target.dataset.source}`);
    console.log(evt.target);
    // pictureNumber = 
}

function ModalWindowClose(evt){
    modalWindow.classList.remove('is-open');
    modalWindowPicture.setAttribute('src', '');
}

function PictureChange(evt){
    // const pictureNumber = 
    if (evt.key === 'ArrowRight' && modalWindow.classList.contains('is-open')) { console.log(modalWindowPicture.nextSibling.original); }
}

// ArrowRight
// homework-08.js:22 ArrowLeft