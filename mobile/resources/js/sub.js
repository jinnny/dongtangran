$(function () {
  $('.header').addClass('sub')
  $('.sub-content__title, .sub-top-menu, .sub-top-link-area').addClass('is--active')
  $('.sub-top-title').addClass('is--active')

  AOS.init({
    duration: 1000
  });

  $('.sub-top-menu__item').on('click', function () {
    $(this).toggleClass('is--active')
  })
  $('.js-sub-menu-depth').on('click', function () {
    $(this).toggleClass('is--active')
  })
})
