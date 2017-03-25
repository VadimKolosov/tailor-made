$(document).ready(function() {
  DropDownMenu();
  hamburgerActive();
  sliDer();
});

function DropDownMenu() {
  $('.last-link-wrapper').hover(function (e) {
    $(this).children('.header--dropdown-menu').stop(true, false).fadeToggle(200);
    $(this).children('.header--dropdown-menu').css( "display", "flex" );
    e.preventDefault();
  });

  $('.message-dropdown').hover(function(e) {
    if ($(window).width() > 1170 ){
    $(this).children('.header--message-box').stop(true, false).fadeToggle(200);
    $(this).children('.header--message-box').css('display', 'block');
    e.preventDefault();
    }
  });
}


function hamburgerActive() {
  $('.header--hamburger').on('click', function() {
  	$('.header--hamburger').toggleClass('active-hamburger-icon');
  	$('.header--link-wrapper').toggleClass('header--link-wrapper-active');
  });
}

function sliDer() {

$('.testimonials--wrapper').first().addClass('active-blockquote');
$('.control-dot').first().addClass('active-dot');
$('.control-dot').click(function() {
  var $this = $(this),
      $siblings = $this.parent().children(),
      position = $siblings.index($this);

    $('.testimonials--wrapper').removeClass('active-blockquote').eq(position).addClass('active-blockquote');
    $siblings.removeClass('active-dot');
    $this.addClass('active-dot');
  });
}
