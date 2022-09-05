/*  1. Створення і рендер розмітки на підставі масиву даних galleryItems і 
наданого шаблону елемента галереї.
    2. Реалізація делегування на div.gallery і отримання url великого зображення.
    3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. 
Використовуй CDN сервіс jsdelivr і додай у проект посилання
на мініфіковані (.min) файли бібліотеки.
    4. Відкриття модального вікна по кліку на елементі галереї. 
Для цього ознайомся з документацією і прикладами.
    5. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. 
Використовуй готову розмітку модального вікна із зображенням
з прикладів бібліотеки basicLightbox. 
    6. Додай закриття модального вікна після натискання клавіші Escape.
     
    Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням
користувач буде перенаправлений на іншу сторінку. 
Заборони цю поведінку за замовчуванням.
     */

import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
// console.log(galleryEl);
//------------------------1-------------------------------//
const elementsOfGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /></a></div>`
  )
  .join('');

galleryEl.innerHTML = elementsOfGallery;

//-----------------------2-------------------------------//
galleryEl.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  const urlOfElemtForModal = event.target.dataset.source;
  // console.log(event.target);
  //-----------------------4, 5-------------------------------//
  addModal(urlOfElemtForModal);
  //---------------------------6----------------------------//
  closeModalWithPressEsc();
}

function addModal(source) {
  const instance = basicLightbox.create(`
      <img src="${source}" width="800" height="600">
`);
  instance.show();
}

function closeModalWithPressEsc() {
  const basicLightboxEl = document.querySelector('div.basicLightbox ');
  //   console.log(basicLightboxEl);
  document.addEventListener('keydown', onModalClose);

  function onModalClose(event) {
    if (event.key !== 'Escape') {
      return;
    }
    basicLightboxEl.remove();
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////
// const galleryEl = document.querySelector('.gallery');
// // console.log(galleryEl);
// //------------------------1-------------------------------//
// const elementOfGallery = galleryItems.map(
//   ({ preview, original, description }) =>
//     `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /></a></div>`
// );

// galleryEl.innerHTML = elementOfGallery.join('');

// //-----------------------2-------------------------------//
// galleryEl.addEventListener('click', onGalleryClick);

// function onGalleryClick(event) {
//   event.preventDefault();

//   if (!event.target.classList.contains('gallery__image')) {
//     return;
//   }
//   const urlOfElemtForModal = event.target.dataset.source;
//   //   console.log(event.target);
//   //-----------------------4, 5-------------------------------//
//   const instance = basicLightbox.create(`
//       <img src="${urlOfElemtForModal}" width="800" height="600">
// `);
//   instance.show();
//   //---------------------------6----------------------------//
//   const basicLightboxEl = document.querySelector('div.basicLightbox ');
//   //   console.log(basicLightboxEl);
//   document.addEventListener('keydown', onModalClose);

//   function onModalClose(event) {
//     if (event.key !== 'Escape') {
//       return;
//     }
//     basicLightboxEl.remove();
//   }
// }
