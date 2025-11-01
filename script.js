// script.js
// JavaScript to handle the mobile navigation menu toggle
// I just used simple show/hide for demonstration purposes
// In a real project, consider adding animations and accessibility features
let btnMenu = document.querySelector('.btn-menu');
let btnClose = document.querySelector('.btn-close');
let navMenu = document.querySelector('.nav-menu');

btnMenu.addEventListener('click', () => {
  navMenu.style.display = 'block';
});

btnClose.addEventListener('click', () => {
  navMenu.style.display = 'none';
});