if (window.innerWidth <= 1024) {
    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        focusOnSelect: true
    });
} else if (window.innerWidth >= 1024) {
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        focusOnSelect: true
    });
}

$('a[data-slide]').click(function (e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
});


$(document).click(function () {
    if (jQuery('.lang-select').find('.flag-img').hasClass('lang-show')) {
        jQuery('.lang-select').find('.flag-img').toggleClass('lang-show');
    }
});
jQuery('.lang-selected').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    jQuery('.lang-select').find('.flag-img').toggleClass('lang-show');

})

const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    let visibility = primaryNav.getAttribute('data-visible');
    console.log(visibility);

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', false);
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', true);
    }
})

// dark theme

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'


// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    let getCurrentLogo = getCurrentTheme()==='dark' ? '/new/img/logo-2.png' : '/new/img/logo.png'
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
    localStorage.setItem('logo', getCurrentLogo)
    let logo = document.getElementById("logo-one");
    logo.setAttribute("src",getCurrentLogo)
})

$(window).click(function() {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', true);
    document.getElementById("arrow").checked = false;
});
  
$('#header').click(function(event){
    event.stopPropagation();
});

logoSwap()
function logoSwap() {
    let logo = document.getElementById("logo-one");
    let localLogo = localStorage.getItem('logo')
    if(!localLogo){ 
        let src = "/new/img/logo-2.png" 
        logo.setAttribute("src",src)
        localStorage.setItem('logo',logo.getAttribute('src'))
    }else{ 
        logo.setAttribute("src",localLogo)
    }
}