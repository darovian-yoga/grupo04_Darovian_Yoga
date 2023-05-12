let formu = document.querySelector('form');

 
formu.addEventListener('submit', function (evento) {

    evento.preventDefault();

    let nombre = document.getElementById('nombreForm').value;

    console.log(nombre)

    let mail = document.getElementById('mailForm').value;

    console.log(mail)

    let telefon = document.getElementById('teleForm').value;

    console.log(telefon)

    let mensaje = document.getElementById('mensajeForm').value;

    console.log(mensaje);

    let saludo = 'Hola' + '    ' + '     ' + nombre + '           ' + 'en 48hs hábiles tendrá una respuesta en el correo electrónico ingresado.';

    function hola() {

        return saludo

    }

    console.log(document.write(saludo));

 

})