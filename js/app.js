"use strict"

const list = document.querySelectorAll(".links li");
const menuToggle = document.querySelector(".menuToggle");
const navbar = document.querySelector(".navbar");
const topUp = document.querySelector(".scroll-toTop");

//===================ACTIVE MENU=====================

function menuActive() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", menuActive));

//===================MENU TOOGLE=====================
menuToggle.onclick = function () {
  navbar.classList.toggle("active");
};

//===================LOADING=====================
window.addEventListener("load", () => {
  
const loader = document.querySelector(".loader")
loader.classList.add("loader--active")
document.querySelector(".loader").addEventListener("transitionend" , () => {
})
})

//===================TO TOP=====================
const srollTopItem = () => {
  let scrollToUp = document.querySelector(".scrollUp")
  let pos = document.documentElement.scrollTop
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  let scrollValue = Math.round((pos * 100) / calcHeight)
  
  if(pos > 100){
   scrollToUp.style.display = "grid"
  }else{
   scrollToUp.style.display = "none"
  }
  scrollToUp.addEventListener("click" , ()=> {
  document.documentElement.scrollTop = 0
  })
  scrollToUp.style.background = `
  conic-gradient(#0ff8ed ${scrollValue}%, #fafafa ${scrollValue}% ) 
  `
}
//===================SCROLL=====================
window.onscroll = () => {
  navbar.classList.remove("active");
  srollTopItem()
};

window.onload = srollTopItem()
