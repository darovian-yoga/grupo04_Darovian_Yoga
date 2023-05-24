/* ------ NAVABAR EFFECT ------ */
const navbar = document.querySelector('.navbar');
let prevScrollPos = window.pageYOffset;

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

/* ------ Buscador ------ */
const searchInput = document.getElementById('search-input');
const paragraphs = document.getElementsByTagName('p');
const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const searchTerm = event.target.value.trim().toLowerCase();

    if (searchTerm.length > 0) {
      let count = 0;

      for (let i = 0; i < paragraphs.length; i++) {
        const paragraph = paragraphs[i];
        const text = paragraph.textContent.toLowerCase();

        if (text.includes(searchTerm)) {
          const words = text.split(' ');
          const newWords = [];
          words.forEach((word) => {
            if (word.includes(searchTerm)) {
              newWords.push(`<span class="resaltado">${word}</span>`);
            } else {
              newWords.push(word);
            }
          });
          paragraph.innerHTML = newWords.join(' ');
          count++;
        } else {
          const html = paragraph.innerHTML.replace(/<span class="resaltado">|<\/span>/gi, '');
          paragraph.innerHTML = html;
        }
      }

      for (let i = 0; i < headers.length; i++) {
        const header = headers[i];
        const text = header.textContent.toLowerCase();

        if (text.includes(searchTerm)) {
          const words = text.split(' ');
          const newWords = [];
          words.forEach((word) => {
            if (word.includes(searchTerm)) {
              newWords.push(`<span class="resaltado">${word}</span>`);
            } else {
              newWords.push(word);
            }
          });
          header.innerHTML = newWords.join(' ');
          count++;
        } else {
          const html = header.innerHTML.replace(/<span class="resaltado">|<\/span>/gi, '');
          header.innerHTML = html;
        }
      }

      if (count === 0) {
        alert(`La palabra "${searchTerm}" no se encuentra en el documento.`);
      } else {
        const firstResult = document.querySelector('.resaltado');
        firstResult.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      for (let i = 0; i < paragraphs.length; i++) {
        const paragraph = paragraphs[i];
        const html = paragraph.innerHTML.replace(/<span class="resaltado">|<\/span>/gi, '');
        paragraph.innerHTML = html;
      }

      for (let i = 0; i < headers.length; i++) {
        const header = headers[i];
        const html = header.innerHTML.replace(/<span class="resaltado">|<\/span>/gi, '');
        header.innerHTML = html;
      }
    }
  }
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

/* ------- Up Section -------- */
window.addEventListener('scroll', function() {
  var upSections = document.querySelectorAll('.up-section'); // Selecionamos todas las secciones

  for (var i = 0; i < upSections.length; i++) {
    var upSectionPosition = upSections[i].getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (upSectionPosition < screenPosition) {
      upSections[i].style.opacity = "1";
      upSections[i].style.transform = "translateY(0)";
    }
  }
});

//Formulario de Validación
let formu = document.getElementById('fomulario');

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


//Recuperación de contraseña
function validarEmail() {
  var emailInput = document.getElementById('email');
  var email = emailInput.value;

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email !== '' && email.match(emailRegex)) {
      window.alert('Se ha enviado un email a su dirección de correo electrónico. Puede que demore unos segundos. No olvide revisar en su carpeta de "SPAM".');
      window.location.href = 'index.html'; 
  } else {
      window.alert('Proporcione una dirección de correo electrónico válida.');
  }
}