var menuItem = $('.scrollspy-wrapper .table-of-contents i');
var sections = $('.scrollspy-wrapper .section').toArray();
var activeSection = '';

// set first menu item to active
$(menuItem[0]).addClass('active');

// checking section on scroll
function checkSection() {
  for (var i = 0; i < sections.length; i++) {
    if (($(sections[i]).offset().top - $(window).scrollTop()) < 20) {
      var id = $(sections[i]).attr('id');
      activeSection = id;
    }
  }
	
  if (activeSection === '') {
    $(menuItem[0]).addClass('active');
  } else if ($(window).scrollTop() + $(window).height() === $(document).height()) {
    $(menuItem).removeClass('active');
    $(menuItem[sections.length - 1]).addClass('active');
  } else {
    $(menuItem).removeClass('active');
    $('.scrollspy-wrapper .table-of-contents').find('a[href="#' + activeSection + '"]').parent().addClass('active');
  }
}

// checking section on click
menuItem.click(function() {
  var id = $(this).find('a').attr('href');
	
  $('html, body').animate({ scrollTop: $(id).offset().top }, 500);
});

checkSection();

$(window).scroll(function() {
  checkSection();
});