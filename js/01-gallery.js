//let's start. firstly, we need to download various libraries...
//... for modal picture...
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css'
//... for super template engine...
// import galleryItemsTpl from './templates/gallery-items.hbs'
//and an import from an array of objects
import { galleryItems } from './gallery-items';

//just checking, what's going on
console.log(galleryItems);
//finding a box in which we will put some pictures
const gallery = document.querySelector('.gallery');
//on fuction we wil...
const onMarkup = () => {
    //...create a variable with markup from handlebars.hbs file
    const newGallery = galleryItems.map(item => {
        return `<a class="gallery__item" href="${item.original}">
                        <img class="gallery__image" 
                        src="${item.preview}" 
                        alt="${item.description}"
                        title="Caption" />
                        </a>`
    
    }).join(' ');

    //and inserting this full markup before the end of our gallery box
    gallery.insertAdjacentHTML('beforeend', newGallery);
    //and returning, otherwise will return undefined
    return gallery;
}

//calling a function
onMarkup();


//-----------------------------------------------------------------modal

//in this function we will...
const onModal = (e) => {
// ...prevent a window from closing
    e.preventDefault();
    // ...if we are clicking NOT on the picture, do nothing
    if (e.target.nodeName !== 'IMG') {
        return;
    }

}
//in the end of the code we're importing a library for modal pictures, in which...
let lightbox = new SimpleLightbox('.gallery a', {
    //...in the bottom of the picture we will fing a sign...
    captionsData: 'alt',
    //...which will appear after 250ms, a short time
    captionDelay: 250, 
});

//the last one, adding a listener to the box with pictures - when clicking, call this function, callback
gallery.addEventListener("click", onModal);
