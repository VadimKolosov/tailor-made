$(document).ready(function () {
    $('.last-link-wrapper').hover(function (e) {
      $(this).children('.header--dropdown-menu').stop(true, false).fadeToggle(200);
      $(this).children('.header--dropdown-menu').css( "display", "flex" );
      e.preventDefault();
    });

    $('.message-dropdown').hover(function(e) {
      $(this).children('.header--message-box').stop(true, false).fadeToggle(200);
      $(this).children('.header--message-box').css('display', 'block');
      e.preventDefault();
    });
});
