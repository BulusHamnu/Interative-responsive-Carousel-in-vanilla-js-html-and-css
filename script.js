//
const backBTN = document.querySelector(".back-button");
const forwardBTN = document.querySelector(".forward-button");
const carousel = document.querySelector(".container");
const cardWidth = document.querySelector(".card").offsetWidth + 14;

forwardBTN.addEventListener("click",function () {
    carousel.scrollLeft += cardWidth;
});

backBTN.addEventListener("click",function () {
    carousel.scrollLeft -= cardWidth;
});

carousel.addEventListener("wheel", (event) => {
    event.preventDefault(); 
    carousel.scrollLeft += event.deltaY; 
});

