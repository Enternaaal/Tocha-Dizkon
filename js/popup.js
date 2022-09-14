const openPopUp = document.getElementById("open-popup");
const closePopUp = document.getElementById("close-popup");
const closePopUpArea = document.getElementById("close-area");
const popUp = document.getElementById("popup-reg");

openPopUp.addEventListener("click", function (e) {
  e.preventDefault();
  popUp.classList.add("active");
});

closePopUp.addEventListener("click", () => {
  popUp.classList.remove("active");
});

closePopUpArea.addEventListener("click", () => {
  popUp.classList.remove("active");
});

document.querySelector("#open-popup").onclick = (e) => {
  document.body.style.overflowY = "hidden";
  document.querySelector("#modal").style.display = "block";
};

document.querySelector("#close-popup").onclick = (e) => {
  document.body.style.overflowY = "scroll";
  document.querySelector("#modal").style.display = "none";
};

document.querySelector("#close-area").onclick = (e) => {
  document.body.style.overflowY = "scroll";
  document.querySelector("#modal").style.display = "none";
};

// popup in
const openPopUpIn = document.getElementById("open-popup-in");
const closePopUpIn = document.getElementById("close-popup-in");
const closePopUpAreaIn = document.getElementById("close-area-in");
const popUpIn = document.getElementById("popup-in");

openPopUpIn.addEventListener("click", function (e) {
  e.preventDefault();
  popUpIn.classList.add("active");
});

closePopUpIn.addEventListener("click", () => {
  popUpIn.classList.remove("active");
});

closePopUpAreaIn.addEventListener("click", () => {
  popUpIn.classList.remove("active");
});

document.querySelector("#open-popup-in").onclick = (e) => {
  document.body.style.overflowY = "hidden";
  document.querySelector("#modal").style.display = "block";
};

document.querySelector("#close-popup-in").onclick = (e) => {
  document.body.style.overflowY = "scroll";
  document.querySelector("#modal").style.display = "none";
};

document.querySelector("#close-area-in").onclick = (e) => {
  document.body.style.overflowY = "scroll";
  document.querySelector("#modal").style.display = "none";
};
