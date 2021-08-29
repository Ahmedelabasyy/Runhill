$(function () {
    "use Strict";
    $('.carousel').carousel({
        interval: 90000
    })
    new WOW().init(); 
});
//At the document ready event
$(function(){
    new WOW().init(); 
});

//also at the window load event
$(window).on('load', function(){
    new WOW().init(); 
});

// Adding Actions To Scroll Button
let scrollButton = document.querySelector(".scroll-to-top");

window.onscroll = _ => {
    if(window.pageYOffset > 700) {
        scrollButton.classList.add("show-button");
    } else {
        scrollButton.classList.remove("show-button");
    }
}

scrollButton.onclick = _ => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}