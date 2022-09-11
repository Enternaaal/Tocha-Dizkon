AOS.init();

$(document).ready(function () {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: true,
  });
});

const openPopUp = document.getElementById("open-popup");
const closePopUp = document.getElementById("close-popup");
const popUp = document.getElementById("popup-reg");

openPopUp.addEventListener("click", function (e) {
  e.preventDefault();
  popUp.classList.add("active");
});

closePopUp.addEventListener("click", () => {
  popUp.classList.remove("active");
});
