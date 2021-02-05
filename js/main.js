$(document).ready(function () {

const FlowersSlider = new Swiper('.flowers-slider', {
  // Параметры слайдера для цветов
  loop: true,
  slidesPerView: 6,

  // Подключаем стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
    // Настройки адаптивной версии
  breakpoints: {
    // если браузер >= 320px
    320: {
      slidesPerView: 2,
    },
    // если браузер >= 480px
    480: {
      slidesPerView: 3,
    },
    // если браузер >= 992px
    992: {
      slidesPerView: 6,
    }
  }
  
});

const ReviewsSlider = new Swiper('.reviews-slider', {
  // Параметры слайдера для отзывов
  loop: true,
  slidesPerView: 1,

  // Подключаем стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//показать букет первого отзыва
$("#review-1").on('click', function() {

  $.fancybox.open([
    {
      src  : 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
      opts : {
        caption : 'Название первого фото',
        thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
      }
    },
    {
      src  : 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
      opts : {
        caption : 'Название второго фото',
        thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
      }
    }
  ], {
    loop : true,
    thumbs : {
      autoStart : true
    }
  });

});
//конец показа букета певого отзыва

});