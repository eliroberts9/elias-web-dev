$(function () {
  $('[data-toggle="popover"]').popover()
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$(window).scroll(function(){
  $(".jumbotron").css("opacity", 1 - $(window).scrollTop() / 250);
});

$(window).scroll(function(){
  $(".navbar").css("opacity", 1 - $(window).scrollTop() / 250);
});