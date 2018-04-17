$(document).ready(function () {
  $('#burguerIcon').click(function() {
    $(this).toggleClass("is-active"),
    $('.main-header').toggleClass("is-active"),
    $('.mobileNav').toggleClass("is-active")
  });

  $('.mobileNav-item').click(function() {
    $('.mobileNav').toggleClass("is-active"),
    $('#burguerIcon').toggleClass("is-active")
  });
}); 