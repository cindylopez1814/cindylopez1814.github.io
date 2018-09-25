$('.svg-wrapper').hover(
  function() {
    $(this).removeClass('out').addClass('in');
  },
  function() {
    $(this).removeClass('in').addClass('out');
  }
);