//select document object model items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const btnLine = document.querySelectorAll(".btn-line");
const contentNav = document.querySelector(".content-nav");
const activityNav = document.querySelector(".activity-nav");

const contentItem = document.querySelectorAll(".nav-item");
const activityItem = document.querySelectorAll(".nav-item2");

//set initial state of the display of menu
let showMenu = false;

//look for event click on the button
menuBtn.addEventListener("click", menuDisplay);

function menuDisplay() {
  if (!showMenu) {
    //if the menu section is not shown, all elements (links) are opened and button is closed
    menuBtn.classList.add("close");
    btnLine.forEach((item) => item.classList.add("close"));
    menu.classList.add("open");
    contentNav.classList.add("open");
    contentItem.forEach((item) => item.classList.add("open"));
    activityNav.classList.add("open");
    activityItem.forEach((item) => item.classList.add("open"));
    //change state of display of menu
    showMenu = true;
  } else {
    //if the menu section is shown, all elements (links) are closed and button is opened
    menuBtn.classList.remove("close");
    btnLine.forEach((item) => item.classList.remove("close"));
    menu.classList.remove("open");
    contentNav.classList.remove("open");
    contentItem.forEach((item) => item.classList.remove("open"));
    activityNav.classList.remove("open");
    activityItem.forEach((item) => item.classList.remove("open"));
    //change state of display of menu
    showMenu = false;
  }
}
