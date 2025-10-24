window.addEventListener('DOMContentLoaded', function() {

    const swiperProductContainer = document.querySelector('.product__catalog_list');
    if (swiperProductContainer) {
        let mySwiper;

        const initSwiper = () => {
            const nextButton = document.querySelector(".swiper-button-next");
            const prevButton = document.querySelector(".swiper-button-prev");
            const isMobile = window.innerWidth <= 1279;

            let slidesPerView = 1.2;
            if (!isMobile) {
                slidesPerView = 2;
            }

            if (window.innerWidth > 767) {
                if (!mySwiper) {
                    mySwiper = new Swiper(swiperProductContainer, {
                        slidesPerView: slidesPerView,
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
                        speed: 600,
                    });
                    if (nextButton) nextButton.style.display = 'flex';
                    if (prevButton) prevButton.style.display = 'flex';

                } else {
                    mySwiper.params.slidesPerView = slidesPerView;
                    mySwiper.update();
                    if (nextButton) nextButton.style.display = 'flex';
                    if (prevButton) prevButton.style.display = 'flex';
                }
            } else {
                if (mySwiper) {
                    mySwiper.destroy();
                    mySwiper = null;
                    if (nextButton) nextButton.style.display = 'none';
                    if (prevButton) prevButton.style.display = 'none';
                }
            }


            if(window.innerWidth <= 1279 && window.innerWidth > 767 && !mySwiper){
                let slidesPerView = 1;
                if (!isMobile) {
                    slidesPerView = 2;
                }
                mySwiper = new Swiper(swiperProductContainer, {
                    slidesPerView: slidesPerView,
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
                    speed: 600,
                });
                if (nextButton) nextButton.style.display = 'flex';
                if (prevButton) prevButton.style.display = 'flex';
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
            this.classList.add('active');
            const nextElement = this.nextElementSibling;
            if (nextElement) {
                nextElement.classList.add('active');
            }
        });
    });

    const videoContainer = document.querySelector('.video__container');
    const videoPreview = document.querySelector('.video__preview');
    const videoSrc = videoContainer.dataset.src;

    videoPreview.addEventListener('click', function() {

        // const iframe = document.createElement('iframe');
        // iframe.src = "https://vkvideo.ru/video_ext.php?oid=-31350907&id=456239100&hash=6be9f44d65d35250";
        // iframe.frameborder = "0";
        // iframe.allowfullscreen = "1";
        // iframe.allow = "autoplay; encrypted-media; fullscreen; picture-in-picture";
        // iframe.style.borderRadius = "10px";

        // Заменяем превью на iframe
        // videoContainer.innerHTML = ''; // Очищаем контейнер
        // videoContainer.appendChild(iframe); // Добавляем iframe

        // Создаем видео
        const video = document.createElement('video');
        video.preload = "auto";
        video.autoplay = true;
        video.muted = false;
        video.loop = true;
        video.controls = true;

        // Создаем источник видео
        const source = document.createElement('source');
        source.type = "video/mp4";
        source.src = videoSrc;

        // Добавляем источник к видео
        video.appendChild(source);

        // Очищаем контейнер и добавляем видео
        videoContainer.innerHTML = '';
        videoContainer.appendChild(video);
    });

})