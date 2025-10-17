window.addEventListener('DOMContentLoaded', function() {

    const swiperProductContainer = document.querySelector('.product__catalog_list');
    if (swiperProductContainer) {
        const swiperMedia = () => new Swiper(swiperProductContainer, {
            slidesPerView: 1,
            grid: {
                rows: 2,
                fill: 'row'
            },
            autoHeight: false,
            initialSlide: 0,
            spaceBetween: 16,
            loop: false,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            // autoplay: {
            //     delay: 3000,
            // },
            speed: 600,
            breakpoints: {
                // when window width is >= 1024px
                1023: {
                    slidesPerView: 1.5
                },
                1279: {
                    slidesPerView: 2,
                }
            }
        });


        let mySwiper;


        const initSwiper = () => {
            const nextButton = document.querySelector(".swiper-button-next");
            const prevButton = document.querySelector(".swiper-button-prev");
            if (window.innerWidth > 767 && !mySwiper) {
                mySwiper = swiperMedia();
                if (nextButton) nextButton.style.display = 'flex';
                if (prevButton) prevButton.style.display = 'flex';
            } else if (window.innerWidth <= 767 && mySwiper) {
                mySwiper.destroy();
                mySwiper = null;
                if (nextButton) nextButton.style.display = 'none';
                if (prevButton) prevButton.style.display = 'none';
            }
        };

        initSwiper();

        window.addEventListener('resize', initSwiper);
    }

    const toggleMobileMenu = document.querySelector('.toggleMenu');
    const mobileMenu = document.querySelector('.mobile__menu');
    const header = document.querySelector('.header');

    toggleMobileMenu.addEventListener('click', function () {
        this.classList.toggle('open');
        mobileMenu.classList.toggle('open');
        header.classList.toggle('dark');
        document.body.classList.toggle('lock');
    });

    const productListHeads = document.querySelectorAll('.product__categories_list .item__head');

    productListHeads.forEach(head => {
        head.addEventListener('click', function() {
            productListHeads.forEach(otherHead => {
                if (otherHead !== this) {
                    otherHead.classList.remove('active');
                    const nextElement = otherHead.nextElementSibling;
                    if (nextElement) {
                        nextElement.classList.remove('active');
                    }
                }
            });
            this.classList.toggle('active');
            const nextElement = this.nextElementSibling;
            if (nextElement) {
                nextElement.classList.toggle('active');
            }
        });
    });

    const videoContainer = document.querySelector('.video__container');
    const videoPreview = document.querySelector('.video__preview');

    videoPreview.addEventListener('click', function() {

        const iframe = document.createElement('iframe');
        iframe.src = "https://vkvideo.ru/video_ext.php?oid=-31350907&id=456239100&hash=6be9f44d65d35250";
        iframe.frameborder = "0";
        iframe.allowfullscreen = "1";
        iframe.allow = "autoplay; encrypted-media; fullscreen; picture-in-picture";
        iframe.style.borderRadius = "10px";

        // Заменяем превью на iframe
        videoContainer.innerHTML = ''; // Очищаем контейнер
        videoContainer.appendChild(iframe); // Добавляем iframe
    });

})