// script.js
// JavaScript to handle the mobile navigation menu toggle
// I just used simple show/hide for demonstration purposes
// In a real project, consider adding animations and accessibility features
let btnMenu = document.querySelector('.btn-menu');
let btnClose = document.querySelector('.btn-close');
let navMenu = document.querySelector('.nav-menu');
let btnFeature = document.querySelector('.btn-feature');
let btnCompany = document.querySelector('.btn-company');
let dropDown = document.querySelector('.drop-down');
let listMenu = document.querySelector('.list-menu');
let items2 = document.querySelector('.items-2');

// btnMenu.addEventListener('click', () => {
//   navMenu.style.display = 'block';
// });

dropDown.addEventListener('mouseover', () => {
  listMenu.style.display = 'block';
});
dropDown.addEventListener('mouseout', () => {
  listMenu.style.display = 'none';
});

// btnCompany.addEventListener('mouseover', () => {
//   items2.style.display = 'block';
// });
// btnCompany.addEventListener('mouseout', () => {
//   items2.style.display = 'none';
// });

btnClose.addEventListener('click', () => {
  navMenu.style.display = 'none';
});