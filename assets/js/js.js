$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    focusOnSelect: true
});

$('a[data-slide]').click(function (e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
});


$(document).click(function() {
    if(jQuery('.lang-select').find('.flag-img').hasClass('lang-show')){
         jQuery('.lang-select').find('.flag-img').toggleClass('lang-show');		 
      }
 });
 jQuery('.lang-selected').click(function(e){
     e.preventDefault();
   e.stopPropagation();
     jQuery('.lang-select').find('.flag-img').toggleClass('lang-show');
         
 })
 
const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
 


 