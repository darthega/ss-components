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

  $button.addEventListener("click", buttonClick);
};

const sideSlider = () => {
  baseSlider();
};

const init = () => {
  sideSlider();
};

init();
