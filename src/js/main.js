
window.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.menu__btn')
    const aside = document.querySelector('.aside')
    const asideCloseBtn = document.querySelector('.aside__close')

    burger.addEventListener('click', () => {
        aside.classList.add('active')
    })
    asideCloseBtn.addEventListener('click', () => {
        aside.classList.remove('active')
    })

    // Sub Link Nav
    const link = document.querySelector('.menu-item-has-children')
    const subMenu = link.querySelector('ul')
    link.addEventListener('click', () => {
        link.classList.toggle('active')
        subMenu.classList.toggle('active')
    })


    // Sliders


    var swiper_events_image = new Swiper(".event-image-slider", {
        spaceBetween: 0,
        slidesPerView: 1,
        watchSlidesProgress: true,
        effect: "fade",
    });

    var swiper_events = new Swiper(".event-slider", {
        slidesPerView: 1,
        speed: 300,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper_events_image,
        },
    });


    if (window.innerWidth <= 1200) {
        swiper_events_image.disable()
        swiper_events.disable()
    }




    const fadeOut = (target) => {
        target.style.opacity = 1
        setTimeout(() => {
            target.style.transition = 'opacity .3s ease-in'
            target.style.opacity = 0
        }, 1)
    }

    const fadeIn = (target) => {
        target.style.opacity = 0
        setTimeout(() => {
            target.style.transition = 'opacity .3s ease-in'
            target.style.opacity = 1
        }, 1)
    }

    // Tabs
    const restoran = document.querySelector('.restoran')
    if (restoran) {
        const tabs = document.querySelectorAll('.tabs')
        tabs.forEach(item => {
            const head = item.querySelector('.tabs__header')
            const wrap = item.querySelector('.tabs__wrap')
            const tabBtn = head.querySelectorAll('.tabs__btn')
            const content = wrap.querySelectorAll('.tab__content')
            const imagePlaceContainer = restoran.querySelector('.tab-img')
            const imagePlace = restoran.querySelector('.tab-img img')

            let activeIdx = 0

            const activeImage = content[activeIdx].dataset.tabImage

            tabBtn[activeIdx].classList.add('active')
            content[activeIdx].classList.add('active')
            fadeIn(content[activeIdx])

            const setImage = (url) => {
                imagePlace.setAttribute('src', url)
                imagePlaceContainer.setAttribute('style', '')
                fadeIn(imagePlaceContainer)
            }

            setImage(activeImage)

            const setActiveTab = (idx) => {
                activeIdx = idx
                removeActive()
                tabBtn[activeIdx].classList.add('active')
                content[activeIdx].classList.add('active')
                fadeIn(content[activeIdx])

                setImage(content[activeIdx].dataset.tabImage)
            }

            const removeActive = () => {
                tabBtn.forEach((tab, idx) => {
                    tab.classList.remove('active')
                })

                content.forEach(item => {
                    item.classList.remove('active')
                    fadeOut(item)
                })
            }

            tabBtn.forEach((tab, idx) => {
                tab.addEventListener('click', () => {
                    setActiveTab(idx);
                })
            })


        })
    }


    // Gallery
    const gallery = document.querySelector('.gallery')

    if (gallery) {
        const tabs = document.querySelectorAll('.tabs')
        tabs.forEach(item => {
            const head = item.querySelector('.tabs__header')
            const wrap = item.querySelector('.tabs__wrap')
            const tabBtn = head.querySelectorAll('.tabs__btn')
            const content = wrap.querySelectorAll('.tab__content')
            let activeIdx = 0



            const swiperGalleryThumb = new Swiper(".gallery-swiper-thumb", {
                spaceBetween: 0,
                slidesPerView: 1,
                watchSlidesProgress: true,
                loop: true,
                effect: "fade",
            });

            const SwiperGallery = new Swiper(".gallery-swiper", {
                slidesPerView: 'auto',
                spaceBetween: 30,
                loop: true,
                slideToClickedSlide: true,
                speed: 300,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                thumbs: {
                    swiper: swiperGalleryThumb,
                },
            });

            content[activeIdx].classList.add('active')
            fadeIn(content[activeIdx])

            const setActiveTab = (idx) => {
                activeIdx = idx
                removeActive()
                console.log(content[activeIdx]);
                tabBtn[activeIdx].classList.add('active')
                content[activeIdx].classList.add('active')
                fadeIn(content[activeIdx])
            }

            const removeActive = () => {
                tabBtn.forEach((tab, idx) => {
                    tab.classList.remove('active')
                })

                content.forEach(item => {
                    item.classList.remove('active')
                    fadeOut(item)
                })
            }

            tabBtn.forEach((tab, idx) => {
                tab.addEventListener('click', () => {
                    setActiveTab(idx);
                })
            })


        })
    }
})