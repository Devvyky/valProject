// SELECTING THE DOM

const loader = document.getElementById("loader");
const mainBody = document.querySelector(".main-body");
const textArea = document.querySelector(".text-area");
const mainText = document.getElementById("main-text");
const subText = document.getElementById("sub-text");
const animImg = document.querySelector(".anim-img");
const btn0 = document.getElementById("btn-0");
const btn1 = document.getElementById("btn-1");

const initialMainText = "Lorem Ipsium";
const initialSubText = "Will You Be My Valentine?";

const initialBtn0Text = "YES!!!";
const initialBtn1Text = "Mad O";

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
  mainText.classList.add("yes-page");
  mainText.style.fontFamily = "Open Sans";
  mainText.style.textAlign = "left";
  mainText.textContent =
    "My love, My baby, Woman of my dreams. I can't think of a better person to spend my life with, I love you so much.";

  subText.classList.add("yes-page");
  subText.textContent = "Awwwwwwwwwwwwn I Love You Babe";
  subText.style.textAlign = "left";
  btn0.textContent = "Say Yes Again 😍";
  btn1.classList.add("hide");

  btn0.addEventListener("click", () => {
    animImg.src = "./img/main-header.gif";
    mainText.classList.remove("yes-page");
    mainText.textContent = initialMainText;
    mainText.style.fontFamily = "Pacifico";
    mainText.style.textAlign = "center";
    subText.textContent = initialSubText;
    subText.classList.remove("yes-page");
    subText.style.textAlign = "center";
    btn0.textContent = initialBtn0Text;
    btn1.classList.remove("hide");
  });
});

btn1.addEventListener("click", () => {
  animImg.src = "./img/witty rose.gif";
  animImg.style.marginTop = "3%";
  animImg.style.width = "300px";
  animImg.style.height = "300px";
  mainText.classList.add("yes-page");
  mainText.style.fontFamily = "Open Sans";
  mainText.style.textAlign = "left";
  mainText.textContent = "Nice Try Chidinma, You're Not Mad";

  subText.classList.add("yes-page");
  subText.textContent = "Now Go Back And Hit YES";
  subText.style.textAlign = "left";
  btn1.textContent = "Take Me Back 😢";
  btn0.classList.add("hide");

  btn1.addEventListener("click", () => {
    animImg.src = "./img/main-header.gif";
    mainText.classList.remove("yes-page");
    mainText.textContent = initialMainText;
    mainText.style.fontFamily = "Pacifico";
    mainText.style.textAlign = "center";
    subText.textContent = initialSubText;
    subText.classList.remove("yes-page");
    subText.style.textAlign = "center";
    btn0.classList.remove("hide");
    btn0.textContent = initialBtn0Text;
    btn1.classList.remove("hide");
    btn1.textContent = initialBtn1Text;
  });
});
