var $bg, $title, $en, $ele;
var _init = function() {
  $ele = $('.sub-top-area');
  $bg = $ele.find('.sub-top-bg');
  $title = $ele.find('.sub-top__title');
  $en = $ele.find('.en_tit');
  $menu = $ele.find('.sub-top-menu')
  $subTitle = $('.sub-content__title')
  $subTitleLine = $subTitle.find('.sub-content-title-line')
  $subTitleText = $subTitle.find('.sub-content-title-text')

  var mySplitText = new SplitText($title, { type: "chars" });
  //var word_tl = new TimelineLite({delay:1});
  var shuffleCharArray = shuffleArray(mySplitText.chars);
  var icons = $(".main-quick-menu");

  TweenLite.set(shuffleCharArray, { autoAlpha: 0 });

  tl = new TimelineLite();
  tl.staggerTo(shuffleCharArray, .8, { autoAlpha: 1, ease: Cubic.easeOut }, 0.2)
  tl.staggerFrom(icons, .8, { autoAlpha: 0, y: 0, ease: Cubic.easeOut }, 0.15)
  tl.play();
  tl.timeScale(1.5);

  function shuffleArray (array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
}
$(function () {
  _init()
  $('.header, .quick-menu').addClass('sub')
  // $('.sub-top-copyright').addClass('is--active')
  $('.sub-content__title').addClass('is--active')
  $('.sub-top-bg').addClass('is--active')
  $('.sub-top-title').addClass('is--active')
  // $('.sub-content__img').addClass('is--active')
  $('.main-quick-menu').addClass('is--active')
  // AOS.init({
  //   offset: -200,
  //   // delay: 1000,
  //   duration: 1000
  // });
  // $(window).scroll(function (){
  //   var scroll = $(document).scrollTop();
  //   if (scroll > 300) {
  //     $('.go-top-button').addClass('is--active')
  //   }else {
  //     $('.go-top-button').removeClass('is--active')
  //   }
  // })
  // $('.go-top-button').on('click', function(){
  //   $('html, body').animate({
  //     scrollTop: '0'
  //   }, 800);
  // });
  AOS.init({
    duration: 1000
  });
})
