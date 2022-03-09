const buttonClick = (e) => {
  const $section = e.target.closest("section");
  const $slider = $section.querySelector("ss-side-slider");

  $slider.toggle();
};

const baseSlider = () => {
  const $base = document.querySelector(".side-slider section.base");
  const $button = $base.querySelector("ss-button");

  $button.addEventListener("click", buttonClick);
};

const stickySlider = () => {
  const $sticky = document.querySelector(".side-slider section.sticky");
  const $button = $sticky.querySelector("ss-button");
  const $slider = $sticky.querySelector("ss-side-slider");

  $sticky.addEventListener("sideButtonClick", () => {
    $slider.toggle();
  });

  $button.addEventListener("click", buttonClick);
};

const carouselNavigation = () => {
  const $navSection = document.querySelector(
    ".side-slider section.navigation.carousel"
  );
  const $button = $navSection.querySelector("ss-button");

  $button.addEventListener("click", buttonClick);

  const $carousel = $navSection.querySelector("ss-carousel");
  const $backButton = $navSection.querySelector(".back");

  const $slides = $carousel.querySelectorAll(".slide");

  let current = 0;

  $backButton.addEventListener("click", (e) => {
    const prev = current - 1;

    if (prev < 0) {
      buttonClick(e);
    } else {
      $carousel.goToSlide(prev);
      current = prev;
    }
  });

  $navSection.addEventListener("sideButtonClick", (e) => {
    const next = current + 1;

    if (next < $slides.length) {
      $carousel.goToSlide(next);
      current = next;
    }

    if ($slides.length === next) {
      $navSection.addEventListener(
        "sideSlideClose",
        (e) => {
          $carousel.goToSlide(0);
          current = 0;
        },
        { once: true }
      );

      buttonClick(e);
    }
  });
};

const viewerNavigation = () => {
  const $navSection = document.querySelector(
    ".side-slider section.navigation.viewer"
  );
  const $button = $navSection.querySelector("ss-button");

  $button.addEventListener("click", buttonClick);

  const $viewer = $navSection.querySelector("ss-side-viewer");
  const $backButton = $navSection.querySelector(".back");

  let current = 0;

  $backButton.addEventListener("click", (e) => {
    const prev = current - 1;

    if (prev < 0) {
      buttonClick(e);
    }

    if (prev === 0) {
      $viewer.slideToMain();
      current = prev;
    }
  });

  $navSection.addEventListener("sideButtonClick", (e) => {
    const next = current + 1;

    if (next === 1) {
      $viewer.slideToNext();
      current = next;
    }

    if (next > 1) {
      $navSection.addEventListener(
        "sideSlideClose",
        (e) => {
          $viewer.switchToMain();
          current = 0;
        },
        { once: true }
      );

      buttonClick(e);
    }
  });
};

const handleScroll = () => {
  const $body = document.querySelector("body");
  const preBodyOverflow = $body.style.overflow;

  document.addEventListener("sideSlideToOpen", () => {
    $body.style.overflow = "hidden";
  });
  document.addEventListener("sideSlideToClose", () => {
    $body.style.overflow = preBodyOverflow;
  });
};

const sideSlider = () => {
  handleScroll();

  baseSlider();
  stickySlider();
  carouselNavigation();
  viewerNavigation();
};

const init = () => {
  sideSlider();
};

init();
