export default class lightbox {
  constructor() {
    let lightbox;
    let lightbox_toggle;
    let lightbox_image;

    function show(image_src) {
      lightbox_image.src = image_src;
      lightbox.style.display = "flex";
      lightbox.classList.add('fadeInBox');
    }

    function hide() {
      lightbox.style.display = "none";
    }

    function initialize() {
      for (const element of document.querySelectorAll(".gallery__image")) {
        element.addEventListener("click", function () {
          show(this.getAttribute('value'));
        });
      }

      lightbox_toggle.onclick = function () { hide(); }
      lightbox_image.onclick = function (event) { event.stopPropagation(); }
    }

    document.addEventListener('DOMContentLoaded', function () {
      lightbox = document.getElementById("lightbox");
      lightbox_toggle = document.getElementById("lightbox__toggle-close");
      lightbox_image = document.getElementById("lightbox__img");

      if (lightbox !== null && lightbox_image !== null) {
        initialize();
      }
    }, false)
  }
};
