$(function() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  $(window).resize( function() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  var mainSlide = function(){
    var $slick_ele1 = $('.main-visual-content');
    var $pagerProgressLine = $('.main-visual-controller .controller-progress-line');

    $slick_ele1.on('init', function(slick){
      _bgMotion(0);
    });

    $slick_ele1.slick({
      infinite: true,
      autoplay: true,
      arrows:false,
      autoplaySpeed: 3000,
      fade:true,
      dots: true,
      focusOnSelect: false
    });



    $slick_ele1.on('beforeChange', function(event, slick, currentSlide, nextSlide){
      _bgMotion(nextSlide);
      $pagerProgressLine.css('width', ((nextSlide+1) * 33.33) + '%')
    });

    function _bgMotion(num){
      var $nextLi = $slick_ele1.find('.slick-slide').eq(num);
      TweenMax.set($('.main-text-img'), {autoAlpha:0, y:80});
      TweenMax.set($('.main-label-img'), {autoAlpha:0, y:80});

      TweenMax.to($nextLi.find('.main-text-img'), 1, {delay:.3, autoAlpha:1, y:0, ease:Power2.easeOut});
      TweenMax.to($nextLi.find('.main-label-img'), 1, {delay:.6, autoAlpha:1, y:0, ease:Power2.easeOut});
    }
  }

  var premiumSlide = function() {
    var $premium_ele = $('.main-premium-slide');
    var $pagerProgressLine = $('.main-premium .controller-progress-line');
    var $pagerNumber1 = $('.main-premium .controller__number1');
    var $pagerNumber3 = $('.main-premium .controller__number3');
    $premium_ele.slick({
      infinite: true,
      autoplay: true,
      arrows: true,
      autoplaySpeed: 2500,
      dots: false,
      fade:true,
      focusOnSelect: false,
      draggable: false
    });

    $premium_ele.on('beforeChange', function(event, slick, currentSlide, nextSlide){
      var active = nextSlide+1
      $pagerProgressLine.css('width', (active * 33.33) + '%')
    });

    $('.js-autoplay-control-button').on('click', function () {
      if($(this).hasClass('autoplay-stop-icon')) {
        $premium_ele.slick('slickPause');
        $(this).addClass('is--hide')
        $('.autoplay-play-icon').removeClass('is--hide')
      }else {
        $premium_ele.slick('slickPlay');
        $(this).addClass('is--hide')
        $('.autoplay-stop-icon').removeClass('is--hide')
      }
    })
  }


  mainSlide()
  premiumSlide()



  AOS.init({
    duration: 2000
  });
})
