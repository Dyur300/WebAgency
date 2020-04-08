$(document).ready(function() {
  $('.burger').click(function(event){
    $('.burger, .burger__line, .navbar__links').toggleClass('active');
  });
});