$('.svg-wrapper').hover(
  function() {
    $(this).removeClass('out').addClass('in');
  },
  function() {
    $(this).removeClass('in').addClass('out');
  }
);

const button = document.querySelector(".hover-button");
button.addEventListener("mouseup", function() {
  button.blur();
});

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});