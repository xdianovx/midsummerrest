let swiper = null;

function initSwiper() {
  const imagePlace = document.querySelector(".image-events-place");
  const imagePlaceFancy = document.querySelector(".image-events-place-fancy");

  swiper = new Swiper(".swiperEvents", {
    direction: "horizontal",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      afterInit: (e) => {
        let activeSlide = e.slides[e.activeIndex];
        if (activeSlide && activeSlide.querySelector("img")) {
          imagePlace.setAttribute(
            "src",
            activeSlide.querySelector("img").getAttribute("src")
          );

          imagePlaceFancy.setAttribute(
            "href",
            activeSlide.querySelector("img").getAttribute("src")
          );
        }
      },
      slideChange: (e) => {
        let activeSlide = e.slides[e.activeIndex];

        if (activeSlide && activeSlide.querySelector("img")) {
          imagePlace.setAttribute(
            "src",
            activeSlide.querySelector("img").getAttribute("src")
          );
          imagePlaceFancy.setAttribute(
            "href",
            activeSlide.querySelector("img").getAttribute("src")
          );
        }
      },
    },
  });
}

function destroySwiper() {
  if (swiper !== null) {
    swiper.destroy(true, true);
    swiper = null;
  }
}

function handleResize() {
  const windowWidth = window.innerWidth;
  if (windowWidth < 768 && swiper !== null) {
    destroySwiper();
  } else if (windowWidth >= 768 && swiper === null) {
    initSwiper();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  handleResize();
});

window.addEventListener("resize", () => {
  handleResize();
});
