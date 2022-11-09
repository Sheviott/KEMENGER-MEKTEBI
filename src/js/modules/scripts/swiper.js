const swiper = new Swiper('.catalog__slider', {
    spaceBetween: 15,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768.99: {
        slidesPerView: 2,
      },
      1024.99: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
const swiperReviews = new Swiper('.reviews__slider', {
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768.99: {
        slidesPerView: 2,
      },
      1024.99: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
