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

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('active');
});

/* ------ CAROUSEL ------ */
const carouselSlide = document.querySelector('.carousel-slide');
const carouselDots = document.querySelectorAll('.carousel-dot');
const carouselPrev = document.querySelector('.carousel-button-prev');
const carouselNext = document.querySelector('.carousel-button-next');

let counter = 0;

function moveCarousel() {
  carouselSlide.style.transform = 'translateX(' + (-25 * counter) + '%)';
}

function updateDots() {
  carouselDots.forEach(dot => dot.classList.remove('active'));
  carouselDots[counter].classList.add('active');
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoCarousel, 5000);
}

function autoCarousel() {
  if (counter >= carouselSlide.children.length - 1) return;
  counter++;
  moveCarousel();
  updateDots();
}

let timer = setInterval(autoCarousel, 5000);

carouselPrev.addEventListener('click', () => {
  if (counter <= 0) return;
  counter--;
  moveCarousel();
  updateDots();
  resetTimer();
});

carouselNext.addEventListener('click', () => {
  if (counter >= carouselSlide.children.length - 1) return;
  counter++;
  moveCarousel();
  updateDots();
  resetTimer();
});

carouselDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    counter = index;
    moveCarousel();
    updateDots();
    resetTimer();
  });
});

//Formulario de Validación
let formu = document.querySelector('form');

formu.addEventListener('submit', function (evento) {

    evento.preventDefault();

    let nombre = document.getElementById('nombreForm').value;

    let mail = document.getElementById('mailForm').value;

    let telefon = document.getElementById('teleForm').value;

    let mensaje = document.getElementById('mensajeForm').value;

    let saludo = 'Hola' + '    ' + '     ' + nombre + '           ' + 'en 48hs hábiles tendrá una respuesta en el correo electrónico ingresado.';

    function hola() {

        return saludo
    }
    console.log(document.write(saludo));
})
