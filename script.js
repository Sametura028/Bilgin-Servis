$('.lines').click(function () {
  $('#line-2').toggleClass('d-none');
  $('#line-1').toggleClass('line-1');
  $('#line-3').toggleClass('line-3');
  $('.mobile-ver').toggleClass('open');
  $('body').toggleClass('no-scroll');
  $('html').toggleClass('no-scroll');

  window.scrollTo(0, 0);

});