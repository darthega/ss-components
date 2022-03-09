const buttonClick = (e) => {
  $section = e.target.closest("section");
  $slider = $section.querySelector("ss-side-slider");

  $slider.toggle();
};

const baseSlider = () => {
  $base = document.querySelector(".side-slider section.base");
  $button = $base.querySelector("ss-button");

  $button.addEventListener("click", buttonClick);
};

const stickySlider = () => {
  $sticky = document.querySelector(".side-slider section.sticky");
  $button = $sticky.querySelector("ss-button");
  $slider = $sticky.querySelector("ss-side-slider");

  $sticky.addEventListener("sideButtonClick", () => {
    $slider.toggle();
  });

  $button.addEventListener("click", buttonClick);
};

const sideSlider = () => {
  baseSlider();
  stickySlider();
};

const init = () => {
  sideSlider();
};

init();
