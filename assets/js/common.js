$(function() {

  function isIE () {
    var e = window.navigator.userAgent, t = e.indexOf('MSIE '), e = e.indexOf('Trident/');
    return (0 < t || 0 < e) && document.body.classList.add('is--IE11'), 0 < t || 0 < e;
  }

  isIE();

});
