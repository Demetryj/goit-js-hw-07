import { galleryItems } from './new-gallery-items.js';
console.log(galleryItems);

const galleryEl = document.querySelector('ul.gallery');

const elementsOfGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          loading="lazy"
          class="lazyload gallery__image"
          data-src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`
  )
  .join('');

galleryEl.innerHTML = elementsOfGallery;

galleryEl.addEventListener('click', onGalleryClick);
function onGalleryClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    console.log('Not click on img');
    return;
  }
  console.log(event.target);
}

if ('loading' in HTMLImageElement.prototype) {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  lazyImages.forEach(img => {
    img.src = img.dataset.src;
  });
} else {
  const scriptLazyloadLibrary = document.createElement('script');
  scriptLazyloadLibrary.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';

  scriptLazyloadLibrary.integrity =
    'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==';

  scriptLazyloadLibrary.referrerpolicy = 'no-referrer';

  document.body.appendChild(scriptLazyloadLibrary);
}

{
  /* <script
  src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
  integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>; */
}
