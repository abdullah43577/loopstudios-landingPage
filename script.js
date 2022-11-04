"use strict";

const open = document.querySelector('img[src="./images/icon-hamburger.svg"]');
const list = document.querySelector("#navhd > ul");
const close = document.querySelector('img[src="./images/icon-close.svg"]');

open.addEventListener("click", () => {
  // console.log("I'm the open button");
  list.classList.toggle("show");
  open.classList.add("hidden");
  open.classList.remove("hamburger");
  close.classList.add("hamburger");
  close.style.width = "40px";
});

close.addEventListener("click", () => {
  //console.log("I'm being clicked");
  list.classList.toggle("show");
  close.classList.add("hidden");
  close.classList.remove("hamburger");
  open.classList.add("hamburger");
});
