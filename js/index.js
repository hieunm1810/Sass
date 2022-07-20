var hamburgerBtn = document.querySelector(".toggler");
var headerExpand = document.querySelector(".header");
var resizeHeader = document.querySelector(".resizeHeader");
var resizeHeader__brand = document.querySelector(".resizeHeader__brand");
var content = document.querySelector(".content");
let checkResize = 0; //kiem tra resize co xuong toi duoi 1199px hay ko
let navlinkArr = document.querySelectorAll(".nav-link");
hamburgerBtn.addEventListener("click", function () {
    hamburgerBtn.classList.toggle("open");
    headerExpand.classList.toggle("--expanded");
    resizeHeader.classList.toggle("--expanded");
    resizeHeader__brand.classList.toggle("--hidden");
    content.classList.toggle("--moved");
    document.body.classList.toggle("--lockScroll");
});
window.addEventListener("resize", function () {
    if (window.matchMedia("(max-width: 1199px)").matches) {
        document.querySelector(".navbar-brand").classList.remove("animate__animated", "animate__fadeInLeftBig");
        document.querySelector(".navbar-collapse").classList.remove("animate__animated", "animate__fadeInLeftBig");
        checkResize = 1;
    } else {
        headerExpand.classList.remove("--expanded");
        hamburgerBtn.classList.remove("open");
        resizeHeader.classList.remove("--expanded");
        resizeHeader__brand.classList.remove("--hidden");
        content.classList.remove("--moved");
        document.body.classList.remove("--lockScroll");
        if (checkResize == 1) {
            document.querySelector(".navbar-brand").classList.add("animate__animated", "animate__fadeInLeftBig");
            document.querySelector(".navbar-collapse").classList.add("animate__animated", "animate__fadeInLeftBig");
            checkResize = 0;
        }
    }
});
window.addEventListener("scroll", function () {
    if(window.scrollY >= 280) {
        headerExpand.classList.add("--fixedTop");
        resizeHeader.classList.add("--fixedTop");
        this.document.querySelector(".navbar-brand img").classList.add("--hidden");
        for(let i = 0; i < navlinkArr.length; i++) {
            navlinkArr[i].classList.add("--custom");
        }
    } else {
        headerExpand.classList.remove("--fixedTop");
        resizeHeader.classList.remove("--fixedTop");
        this.document.querySelector(".navbar-brand img").classList.remove("--hidden");
        for(let i = 0; i < navlinkArr.length; i++) {
            navlinkArr[i].classList.remove("--custom");
        }
    }
}); 