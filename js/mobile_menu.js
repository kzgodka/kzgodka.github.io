// $(".menu").click(function(){
//   $("ul").toggleClass("mobile-menu");
// });

$('.hamburger').on('click', function(){
  $('ul').toggleClass('mobile-menu');
  $('a').on('click', function(){
  $('ul').removeClass('mobile-menu');
});
});

