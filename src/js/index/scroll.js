const images = document.querySelectorAll('section.image');

let currentKey = 0;
const imageTopOffsets =
  Object.keys(images).map(
    key =>
      images[key].offsetTop
  );

window.activeImage = 0;

window.addEventListener(
  'scroll',
  e => {
    const scrolled = window.scrollY;

    let selectedImage = false;
    Object.keys(imageTopOffsets).forEach(
      key => {
        const offset = imageTopOffsets[key];
        const nextOffset = imageTopOffsets[parseInt(key) + 1];

        if (offset + 50 < scrolled) {
          selectedImage = parseInt(key) + 1;
        }
      }
    );

    if (selectedImage && window.activeImage !== selectedImage) {
      window.activeImage = selectedImage;
      window.location.hash = 'image-' + selectedImage;
    }
  }
);
