const allMicrosoft = document.querySelector(".all-microsoft");
const allMicrosoftBOx = document.querySelector(".all-microsoft-box");

allMicrosoft.addEventListener('click', () => {
    allMicrosoftBOx.classList.toggle("block");
});

// --------------------------

const rightSearch = document.getElementById("right-search");
const right = document.querySelector(".right");
const navMenu = document.querySelector(".nav-menu");
const searchBox = document.querySelector(".search-box");
const left = document.querySelector(".left");

rightSearch.addEventListener('click', () => {
    right.classList.add("none");
    navMenu.classList.add("none");
    searchBox.classList.add("active");
});

// ----------------------

const hamSearch = document.getElementById("ham-search");

hamSearch.addEventListener('click', () => {
    right.classList.add("none");
    searchBox.classList.add("active");
    left.classList.add("none");
});

//---------------------------------

const cancel = document.getElementById("cancel");

cancel.addEventListener('click', () => {
    right.classList.remove("none");
    navMenu.classList.remove("none");
    searchBox.classList.remove("active");
    left.classList.remove("none");
});

//-------------------------------

const hamburger = document.getElementById("hamburger");

const hamUl = document.querySelector(".ham-ul");

hamburger.addEventListener('click', () => {
    hamUl.classList.toggle("block");
});

//slider---------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-carousel').mount();
});
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-carousel-2').mount();
});
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-carousel-3').mount();
});
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-carousel-4').mount();
});