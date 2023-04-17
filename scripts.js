const navbar = document.querySelector('.navbar');
let prevScrollPos = window.pageYOffset;

/* ------ NAVABAR EFFECT ------ */
window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    navbar.classList.remove('hidden');
  } else {
    navbar.classList.add('hidden');
  }

  prevScrollPos = currentScrollPos;
});

/* ------ BURGER MENU ------ */

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const close = document.querySelector('.close');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('active');
  close.classList.toggle('active');
});

close.addEventListener('click', () => {
  nav.classList.remove('active');
  burger.classList.remove('active');
  close.classList.remove('active');
});
