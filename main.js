"use strict"
jQuery(document).ready(function ($) {
    $('.question').click(function () {
        $(this).next('.answer').slideToggle();
        $(this).toggleClass("active")
    });
    $(".reviews").bxSlider({
        auto: true,
        pause: 5000
    });
})

window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 320) {
        document.querySelector(".login-btn").classList.add("active")
        document.querySelector(".wrap-1").classList.add("active")
    }
    else {
        document.querySelector(".login-btn").classList.remove("active")
        document.querySelector(".wrap-1").classList.remove("active")
    }
})
document.querySelector(".mobile-nav-open").addEventListener("click", function () {
    document.querySelector(".collapse").style.display = "block";
    document.querySelector(".mobile-nav-close").style.display = "block";
    document.querySelector(".mobile-nav-open").style.display = "none";
})
document.querySelector(".mobile-nav-close").addEventListener("click", function () {
    document.querySelector(".collapse").style.display = "none";
    document.querySelector(".mobile-nav-close").style.display = "none";
    document.querySelector(".mobile-nav-open").style.display = "block";
})
if(window.innerWidth<=870){
    const link=document.querySelector(".collapse")
    const a=link.getElementsByTagName("a")
    for(let i=0;i<a.length;i++){
    a[i].addEventListener("click",function(){
        document.querySelector(".collapse").style.display = "none";
    document.querySelector(".mobile-nav-close").style.display = "none";
    document.querySelector(".mobile-nav-open").style.display = "block";
    })
}
}
AOS.init({
    delay: 245,
});