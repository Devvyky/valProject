// SELECTING THE DOM

const loader = document.getElementById("loader");
const mainBody = document.querySelector(".main-body");
const textArea = document.querySelector(".text-area");
const mainText = document.getElementById("main-text");
const subText = document.getElementById("sub-text");
const animImg = document.querySelector(".anim-img");
const btn0 = document.getElementById("btn-0");
const btn1 = document.getElementById("btn-1");

// ON LOAD ANIMATION

window.addEventListener("load", () => {
  // mainBody.style.visibility = "hidden";

  loader.style.height = "100%";
  loader.style.width = "100%";
  loader.style.borderRadius = "50%";
  setTimeout(() => {
    loader.style.visibility = "hidden";
    mainBody.style.visibility = "visible";
  }, 6500);
});

// CLick EVENTS

btn0.addEventListener("click", () => {
  // btn0.classList.add("hide");
  // mainBody.style.visibility = "hidden";
  animImg.src = "./img/yes.gif";
  animImg.style.width = "300px";
  textArea.classList.add("yes-page");
  // text[1].style.fontFamily = "Arial";
  // text[1].style.textAlign = "left";
  mainText.textContent =
    "My love, My baby, Woman of my dreams. I can't think of a better person to spend my life with, I love you so much.";

  subText.textContent = "Awwwwwwwwwwwwwwwwwwwn I Love You Babe";
  btn0.textContent = "Say Yes Again 😍";
  btn1.classList.add("hide");
});
