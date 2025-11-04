// script.js
// JavaScript to handle the mobile navigation menu toggle
// I just used simple show/hide for demonstration purposes
// In a real project, consider adding animations and accessibility features
let btnMenu = document.querySelector('.btn-menu');
let btnClose = document.querySelector('.btn-close');
let navMenu = document.querySelector('.nav-menu');
let btnLink = document.querySelectorAll('.btn-link');
let listMenu = document.querySelectorAll(".list-menu");
let dropDown = document.querySelectorAll('.drop-down')
let iconArrow = document.querySelectorAll('.icon-arrow')

btnLink.forEach((btn, index) => {
  btn.addEventListener('click', (event) => {
    event.stopPropagation();
    if (listMenu[index].style.display == 'none' || !listMenu[index].style.display) {
      listMenu[index].style.display = 'block';
      listMenu[index > 0 ? index - 1 : index + 1].style.display = 'none';
      iconArrow[index].src = "./images/icon-arrow-up.svg"
    } else {
      listMenu[index].style.display = 'none';
      iconArrow[index].src = "./images/icon-arrow-down.svg"
    }
  })
})

document.addEventListener('click', () => {
  listMenu.forEach(menu => {
    menu.style.display = 'none';
  });
});

listMenu.forEach(menu => {
  menu.addEventListener('click', (event) => {
    event.stopPropagation();
  });
});

btnMenu.addEventListener('click', () => {
  navMenu.style.display = 'block';
});

btnClose.addEventListener('click', () => {
  navMenu.style.display = 'none';
});