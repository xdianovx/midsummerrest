// function start() {
const tabs = () => {
  const item = document.querySelectorAll(".tabs");

  const leftImagePlace = document.querySelector(".image-place");
  let pupa = leftImagePlace.querySelector("img");
  let lupa = leftImagePlace.querySelector("a");

  let activeTabIndex = 0;

  const swiper = new Swiper(".swipert", {
    slideToClickedSlide: true,
    loopAddBlankSlides: true,
    loop: true,
    freeMode: true,

    breakpoints: {
      320: {
        slidesPerView: 3,
      },
      769: {
        spaceBetween: 50,
      },
      962: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      1025: {
        spaceBetween: 20,
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: (e) => {
        let activeSlide = e.slides[e.activeIndex];

        if (activeSlide && activeSlide.querySelector("img")) {
          pupa.setAttribute(
            "src",
            activeSlide.querySelector("img").getAttribute("src")
          );
          lupa.setAttribute(
            "href",
            activeSlide.querySelector("img").getAttribute("src")
          );
        }
      },
    },
  });

  item.forEach((tab) => {
    const btn = tab.querySelectorAll(".tabs__head_btn");
    const content = tab.querySelectorAll(".tabs__content_item");

    btn.forEach((item, idx) => {
      if (idx == activeTabIndex) item.classList.add("active");

      item.addEventListener("click", () => {
        activeTabIndex = idx;

        swiper.forEach((item, id) => {
          if (id == activeTabIndex) {
            item.enable();
          } else {
            item.disable();
          }
        });

        const activeTabSlideIndex = swiper[idx].activeIndex;
        const activeTabCurrentSlide = swiper[idx].slides[activeTabSlideIndex];

        pupa.setAttribute(
          "src",
          activeTabCurrentSlide.querySelector("img").getAttribute("src")
        );

        if (item.classList.contains("active")) {
        } else {
          btn.forEach((item) => {
            item.classList.remove("active");
          });
          item.classList.add("active");

          showActiveTab();
        }
      });
    });

    const swiperNext = document.querySelector(".swiper-button-next");
    const swiperPrev = document.querySelector(".swiper-button-prev");

    const showActiveTab = () => {
      content.forEach((item, idx) => {
        if (idx == activeTabIndex) {
          item.classList.add("active");
          swiperNext.classList.remove("swiper-button-lock");
          swiperPrev.classList.remove("swiper-button-lock");
        } else {
          item.classList.remove("active");
        }
      });
    };

    showActiveTab();
  });
};

tabs();
// }

// window.addEventListener("DOMContentLoaded", start);
// Fancybox.bind("[data-fancybox]", {});
